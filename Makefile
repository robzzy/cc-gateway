# to deploy fastly.
# vars
ifdef CIRCLE_SHA1
TAG ?= $(CIRCLE_SHA1)
else
TAG ?= $(shell git rev-parse HEAD)
endif

CONTEXT ?= david.k8s.local
NAMESPACE ?= demo
SERVICE_NAME ?= cc-gateway
PROJECT_DOCKER_HOST ?= zengzhiyuan
CHART_FOLDER_NAME ?= cc-gateway


install-dependencies:
	cp .env.dist .env
	yarn install --non-interactive

develop: install-dependencies
	yarn run build
	yarn run start

# docker
build: 
	yarn install --non-interactive
	yarn run build
	docker build -t $(SERVICE_NAME):$(TAG) .

docker-pull:
	docker pull $(PROJECT_DOCKER_HOST)/$(SERVICE_NAME):$(TAG)

docker-login:
	echo $$DOCKER_PASSWORD | docker login --username=$(DOCKER_USERNAME) --password-stdin

docker-save:
	mkdir -p docker-images
	docker save -o docker-images/cc-gateway.tar $(SERVICE_NAME):$(TAG)

docker-load:
	docker load -i docker-images/cc-gateway.tar

docker-tag:
	docker tag cc-gateway:$(TAG) $(PROJECT_DOCKER_HOST)/$(SERVICE_NAME):$(TAG)

push-images:
	docker push $(PROJECT_DOCKER_HOST)/$(SERVICE_NAME):$(TAG)


# helm
test-chart:
	helm upgrade $(RELEASE_NAME) deploy/k8s/charts/$(CHART_FOLDER_NAME) --install \
	--namespace=$(NAMESPACE) --kube-context=$(CONTEXT) \
	--dry-run --debug --set image.tag=$(TAG);

install-chart:
	helm upgrade $(RELEASE_NAME) deploy/k8s/charts/$(CHART_FOLDER_NAME) --install \
	--namespace=$(NAMESPACE) --kube-context=$(CONTEXT) \
	--set image.tag=$(TAG) \
	--set run_migrations=$(RUN_MIGRATIONS) \
	--set db_revision=$(DB_REVISION);

lint-chart:
	helm lint deploy/k8s/charts/$(CHART_FOLDER_NAME) --strict
