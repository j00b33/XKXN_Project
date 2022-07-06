import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 155px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: cetner;
  justify-content: space-between;

  width: 946px;
  height: 500px;

  margin-bottom: 85px;
`;

export const Image = styled.img`
  width: 480px;
  height: 500px;

  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  margin-top: 30px;
  width: 384px;
`;

export const Title = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 30px;

  margin-bottom: 6px;
`;

export const WrittnBy = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  color: #8d8d8d;

  margin-top: 5px;
  margin-bottom: 22px;
`;

export const Detail = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 15px;

  color: #8d8d8d;
`;
