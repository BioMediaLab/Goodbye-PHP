import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "./CurrentUser";

const MyDiv = styled.div`
  margin-left: 15px;
  margin-top: 8px;
  margin-bottom: 7px;
`;
const MyInput = styled.input`
  margin-left: 29px;
`;
const Error = styled.h2`
  color: red;
`;

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    verifyUser(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class VerifyUser extends Component {
  state = {
    name: "",
    email: "",
    passowrd: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayError = e => {
    if (e) {
      return (
        <MyDiv>
          <Error>{e.message.replace("GraphQL error: ", "")}</Error>
        </MyDiv>
      );
    }
  };

  render() {
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createUser, { loading, error }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const res = await createUser();
              Router.push({
                pathname: "/index"
              });
            }}
          >
            <h2>Log in</h2>
            <fieldset disabled={loading}>
              {this.displayError(error)}
              <MyDiv>
                <label htmlFor="email">
                  Email
                  <MyInput
                    type="email"
                    name="email"
                    placeholder="e.g. dtrump@gmail.com"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </MyDiv>
              <MyDiv>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="e.g. Password123"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                    style={{ marginLeft: "6px" }}
                  />
                </label>
              </MyDiv>
              <MyDiv style={{ marginLeft: "90px" }}>
                <button type="submit">Log in</button>
              </MyDiv>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default VerifyUser;
export { LOGIN_MUTATION };
