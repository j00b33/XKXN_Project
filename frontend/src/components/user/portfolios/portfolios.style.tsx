import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 470px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  object-fit: cover;

  cursor: pointer;

  margin-bottom: 10px;
`;

export const IfNoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 150px;
`;

export const NoIcon = styled.div`
  font-size: 20px;

  margin-right: 10px;
  margin-top: 7px;

  color: #ff6666;
`;

export const Info = styled.div`
  font-family: "Darker Grotesque";
  font-size: 15px;
`;
