import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: white;

  width: 700px;
  height: 500px;
  border: 1px solid black;

  opacity: 0.9;
  border-radius: 20px;
`;

export const ModalBody = styled.div`
  font-size: 20px;
`;

export const CloseModal = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;

  color: #64748b;
`;
export const Title = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
`;

export const Body = styled.div`
  margin-bottom: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 900px;

  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const SingleBox = styled.div`
  width: 200px;
  height: 300px;

  border: 2px solid #2d394b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin-bottom: 50px;

  cursor: pointer;
  :hover {
    background-color: #e5ebf5;
  }

  transition: 0.4s;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 100px;

  width: 200px;
`;

export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 170px;
`;

export const Text = styled.div`
  font-size: 18px;
  margin-right: 10px;
`;

export const ID = styled.div`
  font-weight: 600;
  color: #64748b;

  font-size: 18px;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 500px;
`;

export const Email = styled.div`
  font-size: 15px;
  :hover {
    color: #64748b;
  }
  transition: 0.4s;
`;
