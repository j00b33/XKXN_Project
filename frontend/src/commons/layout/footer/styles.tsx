import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  /* position: fixed;
  bottom: 0; */

  background-color: #161616;
  color: white;
  padding: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 5px;
  width: 570px;
`;

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-left: 5px;

  width: 570px;
  height: 70px;
`;

export const Text = styled.div`
  font-size: 12px;
  font-family: "Darker Grotesque";
  margin-bottom: 3px;
`;

export const Link = styled.div`
  font-size: 27px;
  :hover {
    color: #a1bbc7;
  }
  cursor: pointer;

  transition: 0.4s;
`;
