import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const query = gql`
  {
    books {
      name
      genre
    }
  }
`;

class BookList extends Component {
  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>;
    } else {
      return data.books.map(book => {
        return <li>{book.name}</li>;
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(query)(BookList);
