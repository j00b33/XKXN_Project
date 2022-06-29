import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  margin-bottom: 61px;
`;

export const SelectionWrapper = styled.div`
  width: 905px;
  height: 665px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #cccccc;
  border-radius: 0px 50px;
`;

export const Title = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

export const Option = styled.div`
  cursor: pointer;

  width: 200px;
  height: 300px;

  border: none;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  :hover {
    color: #64748b;
  }
  transition: 0.4s;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;

  :hover {
    width: 230px;
    height: 230px;
  }

  transition: 0.4s;
`;

export const Text = styled.div`
  font-family: "Darker Grotesque";
  font-weight: 400;
  font-size: 30px;
`;
