import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type User {
        id: String
        createdAt: String
        updatedAt: String
        email: String
        category: String
        userName: String
        notes: [String]
    }

    type Query {
        users: [User]!
    }
`;
