import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  height: 570px;
`;

export const ImageBox = styled.div`
  width: 550px;
  height: 570px;
  background-color: #303030;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageInfoText = styled.div`
  font-size: 30px;
  font-family: "Darker Grotesque";
  cursor: pointer;
  :hover {
    color: #9a9a9a;
  }
`;

export const InputOutBox = styled.div`
  width: 550px;
  height: 570px;
  background-color: #f2f2f2;
`;

export const TattooNameInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: #f2f2f2;

  width: 250px;
  height: 50px;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 40px;

  margin-top: 42px;
  margin-left: 74px;
`;

export const MainInfoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 267px;
  width: 352px;

  margin-left: 74px;
  margin-top: 40px;
`;

export const LeftSubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 267px;
`;

export const RightInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 267px;
`;

export const InputSubject = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  margin-right: 21px;
`;

export const Input = styled.input`
  width: 220px;
  height: 28px;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  background-color: #f2f2f2;
`;

export const DetailInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 263px;
`;

export const WordCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WordCount = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;
  color: #939393;
`;

export const WordCountText = styled.div`
  font-family: "Darker Grotesque";

  font-weight: 400;
  font-size: 15px;

  color: #939393;
`;

export const SmallSelectionWrapper = styled.select`
  border: none;
  border-bottom: 1px solid black;
  background-color: #f2f2f2;

  width: 220px;
  color: grey;

  font-family: "Darker Grotesque";

  font-size: 20px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 30px;

  border: 1px solid grey;

  margin-left: 205px;
  margin-top: 117px;

  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
    border: white;
  }

  transition: 0.4s;
`;
