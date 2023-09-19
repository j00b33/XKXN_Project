import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin-top: 104px;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-family: "Darker Grotesque";

  width: 900px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Onebox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  /* border-radius: 20px 0px 20px 0px; */
  border-radius: 40px;

  width: 900px;
  height: 70px;

  background-color: #dedede;

  :hover {
    /* background-color: #545454; */
    background-color: #2c2c2c;
    color: white;
    width: 930px;
    height: 75px;
  }

  transition: 0.4s;

  /* border: 1px solid #4c4c4c; */

  margin-bottom: 24px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 300px;

  object-fit: cover;
`;

export const UserLikesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeartIcon = styled.div`
  margin-right: 5px;
  font-size: 17px;
  margin-top: 7px;
  color: #cb5555;
`;

export const UserName = styled.div`
  font-size: 15px;
  font-family: "Darker Grotesque";
  /* color: white; */

  width: 110px;

  cursor: pointer;

  :hover {
    color: #cb5555;
  }
`;

export const UserInfo = styled.div`
  font-size: 15px;
  font-family: "Darker Grotesque";
  width: 110px;
  /* color: white; */
`;

export const ReviewButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #cb5555;
  color: white;
  border-radius: 30px;

  font-family: "Darker Grotesque";
  font-size: 15px;

  width: 120px;
  height: 35px;
  padding-bottom: 5px;

  cursor: pointer;
  :hover {
    /* background-color: #545454; */
    background-color: #dfa1a1;
    /* color: black; */
  }

  transition: 0.4s;
`;
