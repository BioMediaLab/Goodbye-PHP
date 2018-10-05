//localhost:3000 to visit this page
//need to figure out what all of the .next/ files are

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';


const link = createHttpLink({ uri: 'https://us1.prisma.sh/matthew-loewen-ae6a9f/super-cool-bud-light-api/dev', fetch: fetch });


// const client = new ApolloClient({
//   uri: "https://us1.prisma.sh/matthew-loewen-ae6a9f/super-cool-bud-light-api/dev"
// });

const GET_USER = gql`
  {
    User{
      name
      id
    }
  }
`;

const user = () => {
  // code to get the users in the form of a react compoment
}


const Index = () => (
  <p></p>
  )
  export default Index