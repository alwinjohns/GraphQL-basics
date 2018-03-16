import mongoose from 'mongoose'
import authorModel from './models/author.js'

const resolvers = {
    Query: {
        authors: () => {
            return authorModel.find()
        },
        author: (root, { id }) => {
            return authorModel.findOne({id: id})
        }
    },
    Mutation: {
        addAuthor: (root, { name, books }) => {
            const author = new authorModel({ name, books })
            return author.save()
        },
        deleteAuthor: (root, { id }) => {
            return authorModel.findOneAndRemove({id})
        },
        updateAuthor: (root, { id, name }) => {
            return authorModel.findOneAndUpdate({id}, {name})
        }
    }
}
export default resolvers
