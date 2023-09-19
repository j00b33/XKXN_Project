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

  width: 1112px;
  height: 500px;

  margin-bottom: 50px;

  background-color: #565656;

  border-radius: 300px;
`;

export const ImageWrapper = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 500px;

  margin-top: 25px;
  margin-left: 20px;

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

  margin-left: 100px;
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
  color: white;
`;

// export const TitleInput = styled.input`
//   font-family: "Darker Grotesque";
//   font-weight: 400;
//   font-size: 30px;

//   width: 120px;
//   height: 40px;

//   border: none;
//   border-bottom: 1px solid grey;
// `;

export const Detail = styled.input`
  width: 380px;
  height: 350px;
  margin-top: 20px;

  position: relative;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  border: none;

  background-color: #565656;

  color: white;
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
    background-color: #303030;
  }

  border-radius: 50px;

  width: 350px;
  height: 40px;
  background-color: #cecece;
`;
