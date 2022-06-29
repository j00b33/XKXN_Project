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

const Text = styled.div`
  /* font-family: "Barlow"; */
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 240px;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #232323;
  }
`;

const TextWrpper = styled.div`
  width: 700px;
`;

export default function LandingMain() {
  const router = useRouter();

  const onClickText = () => {
    router.push("/landing");
  };

  return (
    <Wrapper>
      <TextWrpper>
        <Text onClick={onClickText}>KNOCK NASTY</Text>
      </TextWrpper>
    </Wrapper>
  );
}
