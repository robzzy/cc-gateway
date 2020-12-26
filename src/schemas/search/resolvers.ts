export const resolvers = {
    Query: {
        getAutocomplete: async (_, { term }, { rpc }) => {
            const result = await rpc.search.get_autocomplete({
                args: [],
                kwargs: { term }
            });
            return { autocomplete: result };
        }
    }
}
