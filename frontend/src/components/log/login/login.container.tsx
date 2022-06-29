import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import * as L from "./login.styles";

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password)
  }
`;

export default function LoginContainer() {
  const router = useRouter();

  const [userLogin] = useMutation(USER_LOGIN);

  // const {accessToken, setAccessToken} = useContext(GlobalContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePw = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignup = () => {
    router.push("/log/select");
  };

  const onClickGoBack = () => {
    router.push("/board/main");
  };

  const onClickLogin = async () => {
    await userLogin({
      variables: {
        email,
        password,
      },
    });
    router.push("/");
  };

  return (
    <L.Wrapper>
      <L.LoginBox>
        <L.GoBack onClick={onClickGoBack}>XKXN</L.GoBack>
        <L.Title>Log in</L.Title>
        <L.Inputs>
          <L.SingleInput>
            <L.InputSubject>Email</L.InputSubject>
            <L.Input onChange={onChangeEmail} placeholder="Enter your email" />
          </L.SingleInput>

          <L.SingleInput>
            <L.InputSubject>Password</L.InputSubject>
            <L.Input
              onChange={onChangePw}
              type="password"
              placeholder="Enter your password"
            />
          </L.SingleInput>
        </L.Inputs>

        <L.Button onClick={onClickLogin}>Log in</L.Button>
        <L.IfNoWrapper>
          <L.IfNoText>Don't have any account ? ➤</L.IfNoText>
          <L.GoSignup onClick={onClickSignup}>Go Sign up</L.GoSignup>
        </L.IfNoWrapper>
      </L.LoginBox>
    </L.Wrapper>
  );
}
