import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Single = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 400px;
`;

export const Subject = styled.div`
  font-family: "Darker Grotesque";
  font-size: 20px;
  text-align: right;

  width: 140px;
`;

export const Input = styled.input`
  width: 230px;
  color: grey;
  border: none;
  border-bottom: 1px solid black;

  font-family: "Darker Grotesque";
  font-size: 20px;
`;

export const UpdateBtn = styled.div`
  margin-top: 30px;
  width: 130px;
  height: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "Darker Grotesque";
  font-size: 20px;

  border: 1px solid black;

  :hover {
    color: white;
    background-color: black;
  }
  transition: 0.3s;
  cursor: pointer;

  padding-bottom: 3px;
`;
