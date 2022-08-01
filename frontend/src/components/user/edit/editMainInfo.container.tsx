import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as E from "./edit.style";

export const FETCH_TATTOOIST = gql`
  query fetchTattooist($tattooistId: String!) {
    fetchTattooist(tattooistId: $tattooistId) {
      id
      name
      detail
      phoneNumber
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateUserInput: $updateUserInput)
  }
`;

export default function EditMainInfoContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_TATTOOIST, {
    variables: { tattooistId: String(router.query.tattooistDetail) },
  });

  const [name, setName] = useState(data?.fetchTattooist.name);
  const [phoneNumber, setPhoneNumber] = useState(
    data?.fetchTattooist.phoneNumber
  );
  const [detail, setDetail] = useState(data?.fetchTattooist.detail);

  const [updateUser] = useMutation(UPDATE_USER);

  const onClickUpdate = async () => {
    await updateUser({
      variables: {
        userId: String(router.query.tattooistDetail),
        updateUserInput: {
          name,
          phoneNumber,
          detail,
        },
      },
      refetchQueries: [
        {
          query: FETCH_TATTOOIST,
          variables: {
            tattooistId: String(router.query.tattooistDetail),
          },
        },
      ],
    });
    Modal.success({ content: "Successfully Updated" });
  };

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const onChangePN = (event) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.currentTarget.value);
  };

  return (
    <E.Wrapper>
      <E.Single>
        <E.Subject>Name</E.Subject>
        <E.Input
          type="text"
          defaultValue={data?.fetchTattooist.name}
          onChange={onChangeName}
        />
      </E.Single>

      <E.Single>
        <E.Subject>Phone Number</E.Subject>
        <E.Input
          type="text"
          defaultValue={data?.fetchTattooist.phoneNumber}
          onChange={onChangePN}
        />
      </E.Single>

      <E.Single>
        <E.Subject>Detail</E.Subject>
        <E.Input
          type="text"
          defaultValue={data?.fetchTattooist.detail}
          onChange={onChangeDetail}
        />
      </E.Single>

      <E.UpdateBtn onClick={onClickUpdate}>Update</E.UpdateBtn>
    </E.Wrapper>
  );
}
