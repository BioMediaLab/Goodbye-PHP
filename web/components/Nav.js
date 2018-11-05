import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import CurrentUser from "./CurrentUser";
import Logout from "./Logout";

const MySpan = styled.span`
  margin-right: 15px;
`;

class Nav extends Component {
  render() {
    return (
      <CurrentUser>
        {({ data: { me } }) => (
          <div className="nav">
            <MySpan>
              <Link href="/index">
                <a>Home</a>
              </Link>
            </MySpan>
            {me && (
              <>
                <MySpan>
                  <Link href="/users">
                    <a>View Users</a>
                  </Link>
                </MySpan>
                <Logout />
              </>
            )}
            {!me && (
              <>
                <MySpan>
                  <Link href="/signup">
                    <a>Sign up</a>
                  </Link>
                </MySpan>
                <MySpan>
                  <Link href="/login">
                    <a>Log in</a>
                  </Link>
                </MySpan>
              </>
            )}
          </div>
        )}
      </CurrentUser>
    );
  }
}

export default Nav;
