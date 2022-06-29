import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 1200px;
`;

export const EachDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 85px;

  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 18px;
  width: 500px;
  height: 50px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 300px;
  height: 40px;

  border: 1px solid #2d394b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    color: white;
    background-color: #2d394b;
  }

  transition: 0.4s;
`;
