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

  width: 900px;
  height: 70px;

  border: 1px solid black;

  margin-bottom: 21px;
  box-shadow: 8px 6px 4px rgba(0, 0, 0, 0.3);
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

  width: 110px;

  cursor: pointer;

  :hover {
    /* color: #000000; */
    /* font-size: 17px; */
    text-shadow: 2px 2px 5px #56a5cc;
  }

  transition: 0.4s;
`;

export const UserInfo = styled.div`
  font-size: 15px;
  font-family: "Darker Grotesque";
  width: 110px;
`;

export const ReviewButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: #4c4c4c;
  color: white;
  border-radius: 25px;

  font-family: "Darker Grotesque";
  font-size: 15px;

  width: 120px;
  height: 35px;
  padding-bottom: 5px;

  cursor: pointer;
  :hover {
    background-color: #727272;
    /* color: black; */
  }

  transition: 0.4s;
`;
