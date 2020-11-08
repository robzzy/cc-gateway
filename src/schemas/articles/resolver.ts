export const revolvers = {
    Query: {
        listArticles: async (_, __, { rpc }) => {
            const articles = await rpc.articles.list_articles();
            return articles;
        }
    },
    Mutation: {
        createArticle: async (_, input, { rpc }) => {
            const article = await rpc.articles.create_artivle({
                args: [],
                kwargs: { title: input.title, content: input.content },
            });
            return article;
        }
    },
}