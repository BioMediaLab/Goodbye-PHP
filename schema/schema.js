const graphql = require("graphql");
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString,
     GraphQLSchema, GraphQLID,
     GraphQLInt
    } = graphql;

//dummy data
var books = [
    {name:"the book of matthew", genre:"history",id:'1'},
    {name:"Bio media lab", genre:"fake news",id:'2'}
];

var authors = [
    {name: 'mattis', age: 32, id:'1'},
    {name: 'ronald', age:15, id:'2'},
    {name: 'nikki', age: 45, id: '3'},
    {name: 'sandy', age: 304, id:'4'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                //
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: { 
           type: BookType,
           args: {id: {type: GraphQLID}},
           resolve(parent,args){
               //code to get data from db 
            return _.find(books,{id: args.id})
           }
        },
        author: {
            type:AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})