import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  justify-content: center;

  width: 1166px;
  margin-top: 140px;
  margin-left: 150px;
`;

export const CategoryWrapper = styled.div`
  width: 200px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-right: 100px;

  position: fixed;
  left: 180px;
  top: 140px;
`;

export const CategoryTitle = styled.div`
  font-family: "Darker Grotesque";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;

  margin-bottom: 17px;
`;

export const Genres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  height: 300px;
`;

export const Genre = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  color: #a0a0a0;
  cursor: pointer;

  :hover {
    color: #5d5d5d;
  }

  transition: 0.3s;
`;

export const OuterWrapper = styled.div`
  width: 810px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  margin-left: 250px;
`;

export const SectionWrapper = styled.div``;

export const ContentTitle = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 30px;
`;

export const DivisionLine = styled.div`
  width: 808px;
  border: 1px solid #000000;
`;

export const ContentWrapper = styled.div`
  margin-top: 19px;

  width: 810px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  //한 줄에 3개씩
  flex-wrap: wrap;
`;

export const SingleTattooBox = styled.div`
  position: relative;
  width: 250px;
  margin-bottom: 20px;
`;

export const TattooImage = styled.img`
  width: 250px;
  height: 250px;

  overflow: auto;
  cursor: pointer;
`;

export const TattooInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
`;

export const TattooInfo = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 16px;
`;

export const LikeIcon = styled.div`
  font-size: 14px;
  margin-top: 5px;
  margin-right: 3px;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NewTattooWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
