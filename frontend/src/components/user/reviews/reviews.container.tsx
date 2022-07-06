import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as R from "./reviews.style";

export const FETCH_REVIEWS = gql`
  query fetchReviews($tattooistId: String!) {
    fetchReviews(tattooistId: $tattooistId) {
      id
      detail
      image
      rate
    }
  }
`;

export default function ReviewsContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_REVIEWS, {
    variables: { tattooistId: String(router.query.tattooistDetail) },
  });

  return (
    <R.Wrapper>
      {data?.fetchReviews.map((el) => (
        <R.Image key={el.id} src={el.image ? el.image : "/default.png"} />
      ))}
    </R.Wrapper>
  );
}
