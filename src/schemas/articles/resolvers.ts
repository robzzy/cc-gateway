export const resolvers = {
    Query: {
        listArticles: async (_, __, { rpc }) => {
            const articles = await rpc.articles.list_articles();
            return articles;
        }
    },
    Mutation: {
        createArticle: async (_, { title, content, authorID }, { rpc }) => {
            const article = await rpc.articles.create_article({
                args: [{
                    title,
                    content,
                    author_id: authorID
                }],
                kwargs: {},
            });
            return article;
        }
    },
}