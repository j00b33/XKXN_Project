import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import * as T from "./tattooistList.styles";

export const FETCH_TATTOOISTS = gql`
  query fetchTattooists {
    fetchTattooists {
      id
      name
      # userImage
      email
      userDetail
    }
  }
`;

export default function TattooistListContainer() {
  const [isTrue, setIsTrue] = useState(false);

  const handleModal = () => {
    setIsTrue((prev) => !prev);
  };

  const { data, loading } = useQuery(FETCH_TATTOOISTS);
  const router = useRouter();

  if (loading) {
    return "Loading...";
  }

  console.log(" 👑 Tattooist List ", data);

  const onClickContact = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");
  };

  return (
    <T.Wrapper>
      {isTrue && (
        <T.ModalWrapper>
          <T.Modal>
            <T.ModalBody>모달입니다</T.ModalBody>
            <T.CloseModal onClick={handleModal}>close</T.CloseModal>
          </T.Modal>
        </T.ModalWrapper>
      )}
      <T.Title>Tattooists</T.Title>

      <T.Body>
        {data?.fetchTattooists.map((el) => (
          <T.SingleBox key={el.id} id={el.id} onClick={handleModal}>
            <T.Image
              src={
                // el?.userImage ? el.userImage : "/defaulttattooist.png"}
                "/profilepic/black.png"
              }
            />
            <T.UserInfo>
              <T.TextLine>
                <T.Text>ID: </T.Text>
                <T.ID>{el.id}</T.ID>
              </T.TextLine>

              <T.TextLine>
                <T.Text> Name: </T.Text>
                <T.Name>{el.name}</T.Name>
              </T.TextLine>
              <T.Email onClick={onClickContact}>{el.email}</T.Email>
            </T.UserInfo>
          </T.SingleBox>
        ))}
      </T.Body>
    </T.Wrapper>
  );
}

{
  /* 
              <T.Text> Description: {el?.userDetail} </T.Text> */
}
