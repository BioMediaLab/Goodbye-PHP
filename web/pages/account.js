import ApolloClient from "apollo-boost";
import Link from "next/link";

const Account = () => (
  <div>
    <p>This is the account page</p>

    <Link href="/index">
      <a>Home</a>
    </Link>
  </div>
);

export default Account;
