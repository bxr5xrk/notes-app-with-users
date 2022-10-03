export const resolvers = {
    Query: {
        users: (_parent: any, _args: any, ctx: any) => {
            return ctx.prisma.user.findMany();
        },
    },
};
