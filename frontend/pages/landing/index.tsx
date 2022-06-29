import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 789px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;

  margin-bottom: 50px;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 200px;
  /* font-family: "Barlow"; */

  cursor: pointer;
  :hover {
    color: #232323;
  }
`;

const SubTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 410px;
  height: 50px;

  padding-bottom: 80px;
`;

const SubText = styled.div`
  font-weight: 400;
  font-size: 50px;
`;

export default function LandingSub() {
  const router = useRouter();

  const onClickText = () => {
    router.push("/board/main");
  };

  return (
    <Wrapper>
      <TextWrapper>
        <Text onClick={onClickText}>XKXN</Text>
        <SubTextWrapper>
          <SubText>ㅌ</SubText>
          <SubText>ㅏ</SubText>
          <SubText>ㅌ</SubText>
          <SubText>ㅜ</SubText>
        </SubTextWrapper>
      </TextWrapper>
    </Wrapper>
  );
}
