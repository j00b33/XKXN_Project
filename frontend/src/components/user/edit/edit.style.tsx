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
  margin-top: 20px;
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

export const ChangePWBTN = styled.div`
  margin-top: 40px;
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

export const SelectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 230px;

  cursor: pointer;
`;

export const EachSelection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Selection = styled.div`
  width: 15px;
  height: 15px;

  border-radius: 30px;

  border: 1px solid grey;

  margin-top: 3px;
  margin-right: 5px;
`;

export const SelectionText = styled.div`
  font-family: "Darker Grotesque";
  font-size: 20px;
`;
