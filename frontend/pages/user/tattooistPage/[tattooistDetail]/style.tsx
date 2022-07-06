import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
  margin-bottom: 40px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 813px;
  height: 600px;
`;

export const DefaultSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 400px;

  object-fit: cover;
`;

export const Name = styled.div`
  font-family: "Darker Grotesque";
  font-size: 30px;
`;

export const UserInfo = styled.div`
  font-size: 15px;
  font-family: "Darker Grotesque";
`;

export const DivisionLine = styled.div`
  border: 1px solid #bdbdbd;
  margin-top: 20px;

  width: 200px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 50px;
  width: 140px;

  margin-top: 10px;
`;

export const ContactTextWrapper = styled.div`
  width: 36px;
`;

export const ContactText = styled.div`
  width: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  font-family: "Darker Grotesque";
  font-size: 15px;
`;

export const ContactDataWrapper = styled.div`
  width: 90px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const LikeIcon = styled.div`
  font-size: 17px;
  color: #ff6666;
  margin-top: 7px;
  margin-right: 5px;
`;

export const Likes = styled.div`
  color: #ff6666;
  font-family: "Darker Grotesque";
  font-size: 15px;
`;

export const Deatil = styled.div`
  font-family: "Darker Grotesque";
  font-size: 15px;
  margin-top: 20px;
`;

export const MenuOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 52px;
  height: 600px;

  margin-left: 20px;
  margin-right: 20px;
`;

export const VerticalLine = styled.div`
  border: 1px solid #bdbdbd;
  height: 600px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 355px;
  width: 36px;
`;

export const Menu = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 150px;

  color: #bdbdbd;

  cursor: pointer;

  :hover {
    color: black;
  }

  transform: rotate(-90deg);
  transition: 0.4s;
`;

export const ContainerSection = styled.div`
  /* background-color: salmon; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 470px;
  height: 470px;
`;
