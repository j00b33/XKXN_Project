import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import * as T from "./tattooistList.styles";

export const FETCH_TATTOOISTS = gql`
  query fetchTattooists {
    fetchTattooists {
      id
      name
      email
      detail
      image
      likes
    }
  }
`;

export default function TattooistListContainer() {
  const { data } = useQuery(FETCH_TATTOOISTS);
  const router = useRouter();

  const onClickTattooist = (event) => {
    router.push(`/user/tattooistPage/${event.currentTarget.id}`);
  };

  const onClickUploadReview = (event) => {
    router.push(`/review/upload`);
  };

  return (
    <T.Wrapper>
      <T.Title>Tattooists</T.Title>
      <T.ListWrapper>
        {data?.fetchTattooists.map((el) => (
          <T.Onebox key={el.id}>
            <T.UserImage src={el.image ? el.image : "/default.png"} />
            <T.UserName id={el.id} onClick={onClickTattooist}>
              {el.name}
            </T.UserName>
            <T.UserInfo>{el.email}</T.UserInfo>
            <T.UserLikesWrapper>
              <T.HeartIcon>
                <FaRegHeart />
              </T.HeartIcon>
              <T.UserInfo>{el.likes} Likes</T.UserInfo>
            </T.UserLikesWrapper>
            <T.ReviewButton onClick={onClickUploadReview} id={el.tattooist?.id}>
              + Review
            </T.ReviewButton>
          </T.Onebox>
        ))}
      </T.ListWrapper>
    </T.Wrapper>
  );
}
