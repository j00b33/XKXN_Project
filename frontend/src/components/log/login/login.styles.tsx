import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 788px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 477px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 0px 50px;
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
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 40px;

  margin-top: 90px;
  margin-bottom: 66px;
`;

export const Inputs = styled.div`
  width: 308px;
  height: 110px;

  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: space-between;

  margin-bottom: 80px;
`;

export const SingleInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputSubject = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid black;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 340px;
  height: 40px;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
  border: 1px solid #000000;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
  transition: 0.4s;

  margin-bottom: 26px;
`;

export const IfNoWrapper = styled.div`
  margin-top: 7px;
  margin-bottom: 135px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 215px;
`;

export const IfNoText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;
  color: #a4a4a4;
`;

export const GoSignup = styled.div`
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
