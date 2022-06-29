import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import * as U from "./updateUser.styles";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      name
      userDetail
    }
  }
`;

export default function UpdateUserContainer() {
  const [updateUser] = useMutation(UPDATE_USER);
  const [name, setName] = useState("");
  const [userDetail, setUserDetail] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDescription = (event) => {
    setUserDetail(event.target.value);
  };

  const onClickUpdate = async () => {
    const result = await updateUser({
      variables: {
        updateUserInput: {
          name,
          userDetail,
        },
      },
    });
    console.log(result);
    return result;
  };

  return (
    <U.Wrapper>
      <U.Title>Profile Settings</U.Title>

      <U.BodyWrapper>
        <U.EachDiv>
          <U.Text>Update Username</U.Text>
          <U.Input
            onChange={onChangeName}
            placeholder="Enter your new username"
          />
        </U.EachDiv>

        <U.EachDiv>
          <U.Text>Update User Description</U.Text>
          <U.Input
            onChange={onChangeDescription}
            placeholder="Tell others about yourself"
          />
        </U.EachDiv>
      </U.BodyWrapper>
      <U.Button onClick={onClickUpdate}>Update</U.Button>
    </U.Wrapper>
  );
}
