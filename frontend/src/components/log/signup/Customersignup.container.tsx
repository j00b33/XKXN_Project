import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./signup.style";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      email
      name
      phoneNumber
      isTattooist
    }
  }
`;

export default function CustomerSignupContainer() {
  const [createUser] = useMutation(CREATE_USER);

  const router = useRouter();

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const onClickLogin = () => {
    router.push("/log/login");
  };

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePw = (event) => {
    setPassword(event.target.value);
  };

  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onChangePwcheck = (event) => {
    setCheckPw(event.target.value);
    if (checkPw !== password) {
      return "Password check failed";
    }
  };

  const onClickGoBack = () => {
    router.push("/board/main");
  };

  const onClickSignup = async () => {
    alert("Welcome :) Moving to log in page...");

    await createUser({
      variables: {
        createUserInput: {
          id,
          name,
          password,
          email,
          phoneNumber,
          isTattooist: false,
        },
      },
    });
    router.push("/log/login");
  };

  return (
    <S.Wrapper>
      <S.SignupBox>
        <S.GoBack onClick={onClickGoBack}>XKXN</S.GoBack>
        <S.Title>Customer Sign up</S.Title>
        <S.Inputs>
          <S.SignleInput>
            <S.InputSubject>User ID</S.InputSubject>
            <S.Input onChange={onChangeId} placeholder="Enter user ID" />
          </S.SignleInput>

          <S.SignleInput>
            <S.InputSubject>User Name</S.InputSubject>
            <S.Input onChange={onChangeName} placeholder="Enter user name" />
          </S.SignleInput>

          <S.SignleInput>
            <S.InputSubject>Email</S.InputSubject>
            <S.Input onChange={onChangeEmail} placeholder="Enter your email" />
          </S.SignleInput>

          <S.SignleInput>
            <S.InputSubject>Phone Number</S.InputSubject>
            <S.Input
              onChange={onChangePhoneNumber}
              placeholder="Enter your phone number"
            />
          </S.SignleInput>

          <S.SignleInput>
            <S.InputSubject>Password</S.InputSubject>
            <S.Input
              onChange={onChangePw}
              type="password"
              placeholder="Enter your password"
            />
          </S.SignleInput>

          <S.SignleInput>
            <S.InputSubject>Password Check</S.InputSubject>
            <S.Input
              onChange={onChangePwcheck}
              type="password"
              placeholder="Enter your password again"
            />
          </S.SignleInput>
        </S.Inputs>

        <S.Button onClick={onClickSignup}>Sign up</S.Button>

        <S.IfExistWrapper>
          <S.IfExistText>Already have an account ? ➤</S.IfExistText>
          <S.GoLogIn onClick={onClickLogin}>Go log in</S.GoLogIn>
        </S.IfExistWrapper>
      </S.SignupBox>
    </S.Wrapper>
  );
}
