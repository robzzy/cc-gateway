export const resolvers = {
    Query: {
        getUser: async (_, { email, phone }, __) => {
            return {email, phone};
        }
    },
    Mutation: {

    }
}