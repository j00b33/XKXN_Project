import { useState } from "react";
import * as R from "./uploadTattooistReview.styles";
import { Rate } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { gql, useMutation } from "@apollo/client";
import Router from "next/router";

export const CREATE_TATTOOIST_REVIEW = gql`
  mutation createTattooistReview(
    $createTattooistReviewInput: CreateTattooistReviewInput!
  ) {
    createTattooistReview(
      createTattooistReviewInput: $createTattooistReviewInput
    ) {
      reviewDetail
      tattooist {
        name
      }
      rating
      reviewImage
    }
  }
`;

export default function UploadTattooistReviewContainer() {
  const [createTattooistReview] = useMutation(CREATE_TATTOOIST_REVIEW);

  const [rating, setRating] = useState(0);
  const [tattooist, setTattooist] = useState("");
  const [reviewDetail, setReviewDetail] = useState("");
  const [reviewImage, setReviewImage] = useState("");

  const onChangeTattooist = (event) => {
    setTattooist(event.target.value);
  };

  const onChangeReviewDetail = (event) => {
    setReviewDetail(event.target.value);
  };

  const onChangeReviewImage = (event) => {
    setReviewImage(event.target.value);
  };

  const onChangeRate = (value) => {
    setRating(value);
    console.log("🎀", value);
  };

  console.log(
    " 🐻 Tattooist Review",
    rating,
    tattooist,
    reviewDetail,
    reviewImage
  );

  const onClickUpload = async () => {
    if (tattooist === "" || reviewDetail === "" || reviewImage === "") {
      alert("Check the blanks");
      return;
    }

    alert("Successfully Uploaded");

    await createTattooistReview({
      variables: {
        createTattooistReviewInput: {
          reviewDetail,
          rating,
          tattooist,
          reviewImage,
        },
      },
    });

    Router.push("/board/tattooistReviewList");
  };

  return (
    <R.Wrapper>
      <R.Title>Upload Tattooist Review</R.Title>
      <R.DivisionLine />

      <R.BodyWrapper>
        <R.ImageWrapper>
          <R.ReviewImage src="/cotton.png" />
        </R.ImageWrapper>
        <R.MainWrapper>
          <R.Box>
            <R.Text>Rating</R.Text>
            <Rate onChange={onChangeRate} />
          </R.Box>

          <R.Box>
            <R.Text>Tattooist</R.Text>
            <R.Input
              placeholder="Enter the tattooist name"
              onChange={onChangeTattooist}
            />
          </R.Box>

          <R.Box>
            <R.Text>Tattoo</R.Text>
            <R.Input placeholder="Enter the tattoo you got from this tattooist" />
          </R.Box>

          <R.Box>
            <R.Text>Content</R.Text>
            <R.Input
              onChange={onChangeReviewDetail}
              placeholder="Enter details about your review"
            />
          </R.Box>

          <R.Box>
            <R.Text>Image</R.Text>
            <R.Input
              onChange={onChangeReviewImage}
              placeholder="Enter review image address"
            />
          </R.Box>
        </R.MainWrapper>
      </R.BodyWrapper>

      <R.UploadButton onClick={onClickUpload}>Upload</R.UploadButton>
    </R.Wrapper>
  );
}
