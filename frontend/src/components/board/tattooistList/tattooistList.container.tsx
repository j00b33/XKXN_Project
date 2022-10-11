import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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

  const onClickUploadReview = (el) => {
    // localStorage에 리뷰 쓸 타투이스트 정보 넣기

    // ID
    const rTattooistId = JSON.parse(
      localStorage.getItem("R Tattooist Id") || "[]"
    );
    if (rTattooistId.length > 0) {
      rTattooistId.shift();
    }
    rTattooistId.push(el.id);
    localStorage.setItem("R Tattooist Id", JSON.stringify(rTattooistId));

    // Name
    const rTattooistName = JSON.parse(
      localStorage.getItem("R Tattooist Name") || "[]"
    );
    if (rTattooistName.length > 0) {
      rTattooistName.shift();
    }
    rTattooistName.push(el.name);
    localStorage.setItem("R Tattooist Name", JSON.stringify(rTattooistName));

    // 경로 이동
    router.push(`/review/upload`);
    console.log("Tattooist ID : ", rTattooistId);
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
                <FaHeart />
              </T.HeartIcon>
              <T.UserInfo>{el.likes} Likes</T.UserInfo>
            </T.UserLikesWrapper>
            <T.ReviewButton
              id={el.tattooist?.id}
              onClick={() => onClickUploadReview(el)}
            >
              + Review
            </T.ReviewButton>
          </T.Onebox>
        ))}
      </T.ListWrapper>
    </T.Wrapper>
  );
}
