import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 155px;
  margin-bottom: 85px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: cetner;
  justify-content: space-between;

  width: 946px;
  height: 500px;

  margin-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  width: 480px;
  height: 500px;

  background-color: #303030;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 20px;
  font-family: "Darker Grotesque";
  cursor: pointer;
  :hover {
    color: #9a9a9a;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 30px;
  width: 390px;

  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const Title = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 30px;
  margin-right: 10px;
`;

export const TitleInput = styled.input`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 30px;

  width: 120px;
  height: 40px;

  border: none;
  border-bottom: 1px solid grey;
`;

export const Detail = styled.input`
  width: 380px;
  height: 200px;
  margin-top: 20px;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;

  border: none;

  color: #8d8d8d;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  cursor: pointer;
  transition: 0.4s;
  :hover {
    color: white;
    background-color: black;
  }

  width: 350px;
  height: 40px;
  border: 1px solid black;
`;
