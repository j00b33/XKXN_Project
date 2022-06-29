import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: Cochin;
  margin-bottom: 20px;
  padding-right: 700px;
`;

export const DivisionLine = styled.div`
  border: 1px solid grey;
  width: 1000px;
  margin-bottom: 40px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 900px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 70px;

  margin-bottom: 30px;
`;

export const TwoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 15px;
  font-family: Cochin;
`;

export const Input = styled.input`
  font-size: 15px;
  font-family: Cochin;

  width: 430px;
  height: 45px;

  border: 1px solid grey;
`;

export const LongInput = styled.input`
  font-size: 15px;
  font-family: Cochin;

  width: 900px;
  height: 45px;

  border: 1px solid grey;
`;

export const UploadButton = styled.div`
  cursor: pointer;
  width: 200px;
  height: 40px;

  font-family: Cochin;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;

  :hover {
    color: white;
    background-color: #64748b;
  }
  transition: 0.4s;
`;

// Region Selection
export const SelectionWrapper = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  height: 45px;
  font-family: Cochin;
  font-size: 15px;
`;

export const SmallSelectionWrapper = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 430px;
  height: 45px;
  font-family: Cochin;
  font-size: 15px;
`;
