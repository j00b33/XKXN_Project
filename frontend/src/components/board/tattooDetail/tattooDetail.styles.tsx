import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 900px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 65px;
  margin-bottom: 60px;
`;

export const Title = styled.div`
  font-size: 25px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 420px;
  height: 420px;
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;

  width: 420px;
  height: 420px;
`;

export const ContextHeader = styled.div`
  width: 420px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContextDivisionLine = styled.div`
  width: 420px;

  border: 1px solid #c9c9c9;
`;

export const ContextDescription = styled.div`
  margin-top: 4px;
  width: 420px;
  height: 375px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DescriptionTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Purchase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  border: 2px solid black;
  width: 900px;
  height: 50px;

  :hover {
    color: white;
    background-color: #64748b;
  }

  cursor: pointer;
  transition: 0.4s;
`;
