import CreateUser from "../components/CreateUser";
import VerifyUser from "../components/VerifyUser";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Login = props => (
  <Columns>
    <VerifyUser />
    <CreateUser />
  </Columns>
);

export default Login;
