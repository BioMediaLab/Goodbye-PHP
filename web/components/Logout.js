import React, { Component } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./CurrentUser";

const LOG_OUT_MUTATION = gql`
  mutation LOG_OUT_MUTATION {
    logout
  }
`;

const Logout = props => (
  <Mutation
    mutation={LOG_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {logout => <button onClick={logout}>Log Out</button>}
  </Mutation>
);
export default Logout;
