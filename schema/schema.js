const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//dummy data
var books = [
  { name: "The Book of Matthew", genre: "History", id: "1", authorId: "1" },
  {
    name: "Bio Media Lab User Manual",
    genre: "Manual",
    id: "2",
    authorId: "2"
  },
  { name: "The Twisted Needle", genre: "Sci-Fi", id: "3", authorId: "3" },
  { name: "The Blighted Pickle", genre: "Fantasy", id: "4", authorId: "4" },
  { name: "The Hammer and The Rose", genre: "Romance", id: "5", authorId: "4" },
  {
    name: "Secret of the Vanishing Noodles",
    genre: "Crime",
    id: "6",
    authorId: "2"
  },
  { name: "2105: Retribution", genre: "History", id: "7", authorId: "4" },
  { name: "Dressed for Murder", genre: "Crime", id: "8", authorId: "3" }
];

var authors = [
  { name: "Mattis", age: 32, id: "1" },
  { name: "Ronald", age: 15, id: "2" },
  { name: "Nikki", age: 45, id: "3" },
  { name: "Sandy", age: 304, id: "4" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
