import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { RiSearchLine } from "react-icons/ri";
import { GlobalContext } from "../../../../pages/_app";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  background-color: white;

  width: 100%;
  height: 66px;

  display: flex;
  justify-content: row;
  align-items: center;

  border-bottom: 1px solid black;
  z-index: 1000;
`;

const RightSide = styled.div`
  margin-left: 102px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.div`
  /* font-family: "Barlow"; */
  font-style: normal;
  font-weight: 700;
  font-size: 43px;

  cursor: pointer;
`;

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 119px;
  padding-top: 15px;

  margin-left: 15px;
`;

const NativationText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  width: 60px;
`;

const LeftSide = styled.div`
  margin-left: 562px;
  width: 430px;
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.div`
  width: 321px;
  height: 34px;
  background: #f0f0f0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchText = styled.input`
  font-size: 14px;
  border: none;
  width: 290px;
  height: 30px;
  background-color: #f0f0f0;
`;

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 20px;
`;

const JoinPlus = styled.div`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;

  cursor: pointer;
`;

const ProfilePic = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 1px solid black;
  overflow: auto;

  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/board/main");
  };

  const onClickTattooList = () => {
    router.push("/board/tattooList");
  };

  const onClickTattooists = () => {
    router.push("/board/tattooistList");
  };

  const onClickLogin = () => {
    router.push("/log/login");
  };

  const onClickAddPost = () => {
    router.push("/board/upload");
  };

  const onClickMyPage = () => {
    router.push("/log/updateUser");
  };

  const { loggedin, setLoggedin } = useContext(GlobalContext);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a>My Page</a>,
        },
        {
          key: "2",
          label: <a>Log out</a>,
        },
      ]}
    />
  );

  return (
    <Wrapper>
      <RightSide>
        <Logo onClick={onClickLogo}>XKXN</Logo>
        <NavigationWrapper>
          <NativationText onClick={onClickTattooList}>Tattoo</NativationText>
          <NativationText onClick={onClickTattooists}>Tattooist</NativationText>
        </NavigationWrapper>
      </RightSide>

      <LeftSide>
        <Search>
          <SearchText type="text" />
          <SearchIcon>
            <RiSearchLine />
          </SearchIcon>
        </Search>
        <JoinPlus onClick={loggedin ? onClickAddPost : onClickLogin}>
          {loggedin ? <VscAdd /> : "Join"}
        </JoinPlus>

        <Dropdown
          overlay={menu}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <ProfilePic
            src="/logo.png"
            onClick={loggedin ? onClickMyPage : onClickLogin}
          />
        </Dropdown>
      </LeftSide>
    </Wrapper>
  );
}
