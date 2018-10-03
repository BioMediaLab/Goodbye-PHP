const graphql = require("graphql");
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
var books = [
    {name:"the book of matthew", genre:"history",id:'1'},
    {name:"Bio media lab", genre:"fake news",id:'2'}
];



const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { 
           type: BookType,
           args: {id: {type: GraphQLString}},
           resolve(parent,args){
               //code to get data from db 
            return _.find(books,{id: args.id})
           }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})