import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Title = styled.div`
  font-size: 39px;
  font-family: Cochin;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 820px;
`;

export const DivisionLine = styled.div`
  border: 1px solid grey;
  width: 900px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 860px;

  margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
`;

export const ReviewImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.div`
  font-size: 20px;
  font-family: Cochin;
`;

export const Rate = styled.input`
  width: 40px;
  font-size: 15px;
  font-family: Cochin;
  height: 40px;
`;

export const Input = styled.input`
  width: 430px;
  height: 40px;
  font-size: 15px;
  font-family: Cochin;
`;

export const UploadButton = styled.div`
  cursor: pointer;
  width: 600px;
  height: 50px;

  font-size: 15px;
  font-family: Cochin;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    color: white;
    background-color: #2d394b;
  }

  transition: 0.4s;

  color: #2d394b;
  background: white;
  border: 2px solid #2d394b;
`;
