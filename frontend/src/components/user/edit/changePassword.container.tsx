import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdPowerSettingsNew } from "react-icons/md";
import * as P from "./edit.style";

export const UPDATE_USER = gql`
  mutation updateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateUserInput: $updateUserInput)
  }
`;

export default function ChangePasswordContainer() {
  const [updateUser] = useMutation(UPDATE_USER);

  const router = useRouter();

  const [password, setPassword] = useState("");

  const [original, setOriginal] = useState("");
  const [newPw, setNewPw] = useState("");
  const onChangeOriginal = (event) => {
    setOriginal(event.currentTarget.value);
  };

  const onChangeNew = (event) => {
    setNewPw(event.currentTarget.value);
  };

  const onClickUpdate = async () => {
    if (original === newPw) {
      Modal.info({
        content: "The new password is identical to the original password",
      });
      return;
    }
    await updateUser({
      variables: {
        userId: String(router.query.tattooistDetail),
        updateUserInput: {
          password,
        },
      },
    });
    Modal.success({ content: "Successfully Updated" });
  };

  return (
    <P.Wrapper>
      <P.Single>
        <P.Subject>Current Password</P.Subject>
        <P.Input type="password" onChange={onChangeOriginal} />
      </P.Single>

      <P.Single>
        <P.Subject>New Password</P.Subject>
        <P.Input type="password" onChange={onChangeNew} />
      </P.Single>

      <P.ChangePWBTN onClick={onClickUpdate}>Update</P.ChangePWBTN>
    </P.Wrapper>
  );
}
