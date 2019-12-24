export const resolvers = {
    Query: {
        getUser: async (_, { email, phone }, { rpc }) => {
            const userInfo = await rpc.users.get_user({
                kwargs: { email, phone }
            })
            return userInfo;
        }
    },
    Mutation: {

    }
}
