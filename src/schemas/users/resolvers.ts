export const resolvers = {
    Query: {
        getUser: async (_, { email, phone }, { rpc }) => {
            const filters = [];

            if (email) {
                const filter = { field: "email", value: email };
                filters.push(filter);
            }
            if (phone) {
                const filter = { filed: "phone", value: phone };
                filters.push(filter);
            }
            const userInfo = await rpc.users.list_users({
                kwargs: { filters }
            });

            return userInfo[0];
        }
    },
    Mutation: {
    }
}
