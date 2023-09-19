import { gql, useMutation } from "@apollo/client";
import { Modal, Rate } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as U from "./reviewUpload.style";

export const CREATE_REVIEW = gql`
  mutation createReview($createReviewInput: CreateReviewInput!) {
    createReview(createReviewInput: $createReviewInput) {
      id
      detail
      image
      rate
    }
  }
`;

export default function ReviewUploadContainer() {
  const [createReview] = useMutation(CREATE_REVIEW);

  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("/default.png");
  const [rate, setRate] = useState(0);

  const onChangeDetail = (event) => {
    setDetail(event.currentTarget.value);
  };

  const onChangeRate = (value) => {
    console.log(value);
    setRate(value);
  };

  const router = useRouter();

  const [tattooistId, setTattooistId] = useState([]);
  const [tattooistName, setTattooistName] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const rTattooistId = JSON.parse(
        localStorage.getItem("R Tattooist Id" || "[]")
      );
      setTattooistId(rTattooistId);
      console.log(rTattooistId);

      const rTattooistName = JSON.parse(
        localStorage.getItem("R Tattooist Name" || "[")
      );
      setTattooistName(rTattooistName);
    }
  }, []);

  const onClickUpload = async () => {
    try {
      const result = await createReview({
        variables: {
          createReviewInput: {
            detail,
            rate,
            image,
            tattooistId: tattooistId[0],
          },
        },
      });
      Modal.success({ content: "Review successfully uploaded" });
      router.push(`/review/${result.data.createReview.id}`);
    } catch (error) {
      Modal.error({ content: "Error" });
    }
  };

  return (
    <U.Wrapper>
      <U.MainWrapper>
        <U.ImageWrapper>
          <U.Text>Upload Image</U.Text>
        </U.ImageWrapper>

        <U.ContentWrapper>
          <U.TitleWrapper>
            <U.Title>Review for {tattooistName}</U.Title>
          </U.TitleWrapper>
          <Rate onChange={onChangeRate} value={rate} />
          <U.Detail
            onChange={onChangeDetail}
            placeholder="Enter the review details here"
          />
        </U.ContentWrapper>
      </U.MainWrapper>
      <U.Button onClick={onClickUpload}>Upload</U.Button>
    </U.Wrapper>
  );
}
