import { gql, useQuery } from "@apollo/client";
import { Rate } from "antd";
import { useRouter } from "next/router";
import * as D from "./reviewDetail.style";

export const FETCH_REVIEW = gql`
  query fetchReview($reviewId: String!) {
    fetchReview(reviewId: $reviewId) {
      id
      detail
      image
      rate
      tattooist {
        id
        name
      }
    }
  }
`;

export default function ReviewDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_REVIEW, {
    variables: { reviewId: String(router.query.reviewDetail) },
  });

  return (
    <D.Wrapper>
      <D.MainWrapper>
        <D.Image
          src={
            data?.fetchReview?.image ? data?.fetchReview?.image : "/default.png"
          }
        />

        <D.ContentWrapper>
          <D.Title>
            Review of Tattoooist {data?.fetchReview?.tattooist?.name}
          </D.Title>
          <Rate disabled value={data?.fetchReview.rate} />
          <D.WrittnBy>Written by Anonymous Person</D.WrittnBy>
          <D.Detail>{data?.fetchReview.detail}</D.Detail>
        </D.ContentWrapper>
      </D.MainWrapper>
    </D.Wrapper>
  );
}
