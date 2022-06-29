import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 788px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignupBox = styled.div`
  width: 447px;
  left: 496px;
  top: 61px;

  border: 1px solid #cccccc;
  border-radius: 0px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoBack = styled.div`
  width: 420px;
  color: #cccccc;
  margin-top: 13px;

  cursor: pointer;
  :hover {
    color: #5b5b5b;
  }
  transition: 0.4s;
`;

export const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 41px;

  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
`;

export const Inputs = styled.div`
  width: 344px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 29px;
`;

export const SignleInput = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 23px;
`;

export const InputSubject = styled.div`
  width: 123px;
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 0px;
  border-bottom: 1px solid black;
  font-size: 14px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid black;

  width: 340px;
  height: 40px;

  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
  transition: 0.4s;
`;

export const IfExistWrapper = styled.div`
  margin-top: 7px;
  margin-bottom: 79px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 215px;
`;

export const IfExistText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;
  color: #a4a4a4;
`;

export const GoLogIn = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;
  color: #a4a4a4;
  cursor: pointer;
  :hover {
    color: #464646;
  }
  transition: 0.4s;
`;
