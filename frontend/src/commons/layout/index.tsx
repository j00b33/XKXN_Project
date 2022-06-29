import { ReactChild } from "react";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* margin-bottom: 100px; */
`;

const LayoutBody = styled.div`
  width: 100%;
`;

export default function Layout(props: IProps) {
  const router = useRouter();

  const HIDDEN_HEADER = [
    "/",
    "/landing",
    "/log/signup",
    "/log/login",
    "/log/select",
    "/log/customersignup",
    "/log/tattooistsignup",
    "/log/updateUser",
  ];

  const HIDDEN_FOOTER = [
    "/log/signup",
    "/log/login",
    "/log/select",
    "/log/customersignup",
    "/log/tattooistsignup",
    "/log/updateUser",
    "/",
    "/landing",
  ];

  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}

      <BodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
