import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `type Author {
    id: String,
    name: String,
    books: [String]
}
type Query {
    authors: [Author],
    author(id: String): Author
}
type Mutation {
    addAuthor(name: String!, books: [String]): Author,
    deleteAuthor(id: String!): Author,
    updateAuthor(id: String!, name: String!): Author
}
`

const schema = makeExecutableSchema({typeDefs, resolvers})
// addMockFunctionsToSchema({schema})

export default schema
