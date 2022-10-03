import { extendType, objectType } from "nexus";
import { Note } from "./Note";

export const User = objectType({
    name: "User",
    definition(t) {
        t.string("id");
        t.string("userName");
        t.string("email");
        t.string("createdAt");
        t.string("updatedAt");
        t.list.field("notes", {
            type: Note,
            async resolve(_parent, _args, ctx) {
                return await ctx.prisma.note.findUnique({
                    where: {
                        id: _parent.id,
                    },
                });
            },
        });
    },
});

export const UsersQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("users", {
            type: "Query",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.user.findMany();
            },
        });
    },
});
