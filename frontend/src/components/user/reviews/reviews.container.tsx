import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IoBanOutline } from "react-icons/io5";
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

  const onClickDetail = (event) => {
    router.push(`/reviewDetail/${event.currentTarget.id}`);
  };

  return (
    <R.Wrapper>
      {data?.fetchReviews.length > 0 ? (
        data?.fetchReviews.map((el) => (
          <R.Image
            onClick={onClickDetail}
            key={el.id}
            id={el.id}
            src={el.image ? el.image : "/default.png"}
          />
        ))
      ) : (
        <R.IfNoWrapper>
          <R.NoIcon>
            <IoBanOutline />
          </R.NoIcon>
          <R.Info>There aren't any reviews yet</R.Info>
        </R.IfNoWrapper>
      )}
    </R.Wrapper>
  );
}
