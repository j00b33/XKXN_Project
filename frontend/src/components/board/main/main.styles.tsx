import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 80px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 360px;
  background-color: black;
  margin-bottom: 46px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 211px;
  margin-top: 70px;
`;

export const BannerText = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const BannerDivisionLine = styled.div`
  width: 400px;
  border: 1px solid #ffffff;
`;

export const GenreName = styled.div`
  /* font-family: "Barlow"; */
  font-weight: 700;
  font-size: 130px;
  color: #ffffff;
`;

export const BestWrapper = styled.div`
  width: 1096px;
  height: 253px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BestTattoo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 253px;
`;

export const BestTitle = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 37px;
`;

export const BestDivisionLine = styled.div`
  width: 490px;
  border: 1px solid black;
  margin-bottom: 24px;
`;

export const BestContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 490px;
`;

export const SingleTattoo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 190px;
  width: 120px;
`;

export const BestImage = styled.img`
  width: 120px;
  height: 120px;

  box-shadow: 5px -5px #272727;

  object-fit: cover;

  cursor: pointer;
`;

export const BestName = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 600;
  font-size: 15px;
`;

export const BestId = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 14px;

  cursor: pointer;
`;

export const BestLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeartIcon = styled.div`
  width: 20px;
  height: 20px;
  padding-top: 3px;
`;

export const BestLikes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 14px;
`;

export const BestTattooist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 253px;
`;

export const SingleTattooist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 190px;
  width: 120px;
`;
