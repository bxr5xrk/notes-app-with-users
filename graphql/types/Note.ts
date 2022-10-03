import { User } from "./User";
import { enumType, objectType } from "nexus";

export const Note = objectType({
    name: "Note",
    definition(t) {
        t.string("id");
        t.string("title");
        t.string("content");
        t.string("createdAt");
        t.string("updatedAt");
        t.field("category", { type: Categories });
        t.string("authorId");
        t.field("author", {
            type: "String",
            async resolve(_parent, _args, ctx) {
                return await ctx.prisma.user.findUnique({
                    where: {
                        id: _parent.authorId,
                    },
                });
            },
        });
    },
});

const Categories = enumType({
    name: "Categories",
    members: ["Idea", "RandomThought", "Task"],
});
