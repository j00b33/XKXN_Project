import { gql, useQuery } from "@apollo/client";
import { Rate } from "antd";
import { useRouter } from "next/router";
import * as R from "./tattooistReviewList.styles";

const FETCH_TATTOOIST_REVIEW = gql`
  query fetchTattooistReviews {
    fetchTattooistReviews {
      id
      reviewDetail
      reviewImage
      rating
      tattooist {
        id
        name
      }
    }
  }
`;

export default function TattooistReviewListcontainer() {
  const router = useRouter();
  const onClickUpload = () => {
    router.push("/board/uploadReview");
  };

  const { data } = useQuery(FETCH_TATTOOIST_REVIEW);
  console.log("👠 Review Data: ", data);

  const onClickReviewDetail = () => {
    router.push("/");
  };

  return (
    <R.Wrapper>
      <R.Title>Tattoo Review</R.Title>
      <R.Body>
        {data?.fetchTattooistReviews.map((el) => (
          <R.SingleBox key={el.id} id={el.id}>
            <R.Image src={el?.reviewImage ? el.reviewImage : "/empty.png"} />
            <R.Context>
              <R.Text>Tattooist {el.tattooist?.name} </R.Text>
              <R.InnerDivision />
              <R.Detail onClick={onClickReviewDetail}>
                {el.reviewDetail.length > 10
                  ? `${el.reviewDetail.slice(0, 11)}...더보기`
                  : el.reviewDetail}
              </R.Detail>
              <R.Text>
                <Rate disabled defaultValue={el?.rating} />
              </R.Text>
            </R.Context>
          </R.SingleBox>
        ))}
      </R.Body>
      <R.Upload onClick={onClickUpload}>Upload Review of Tattooist</R.Upload>
    </R.Wrapper>
  );
}
