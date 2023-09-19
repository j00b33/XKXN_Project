import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 74px;
`;

export const MainWrapper = styled.div`
  width: 1172px;
  height: 570px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 65px;
  margin-bottom: 60px;
`;

export const RecentViewWrapper = styled.div`
  background-color: #343434;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 50px;

  width: 150px;
  height: 600px;
`;

export const RecentViewTitle = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: white;
`;

export const RecentContentWrapper = styled.div`
  width: 120px;
  height: 495px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: none;
`;

export const RecentImg = styled.img`
  width: 105px;
  height: 105px;
  border: none;

  border-radius: 500px;

  object-fit: cover;

  cursor: pointer;
  :hover {
    filter: brightness(60%);
    /* filter: blur(4px); */
  }
  transition: 0.4s;
`;

export const Image = styled.img`
  width: 550px;
  height: 570px;

  object-fit: cover;
  border-radius: 5000px;
`;

export const InfoWrapper = styled.div`
  width: 398px;
  height: 546px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Headers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 106px;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 40px;

  margin-right: 20px;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SubHeaderText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
`;

export const TatooistName = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`;

export const MainInfoWrapper = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SingleInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
`;

export const Info = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;
  width: 68px;
`;

export const InfoData = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  width: 322px;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 330px;
  height: 49px;
`;

export const SingleTool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 80px;

  color: #666666;
  :hover {
    color: #2b2b2b;
  }
  transition: 0.4s;
`;

export const ToolIcon = styled.div`
  font-size: 30px;
  height: 40px;
`;

export const ToolText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 14px;
`;
