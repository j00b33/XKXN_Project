import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CreatedTattooContainer from "../../../../src/components/user/createdTattoos/createdTattoos.container";
import PortfoliosContainer from "../../../../src/components/user/portfolios/portfolios.container";
import ReviewsContainer from "../../../../src/components/user/reviews/reviews.container";
import * as P from "./style";

export const FETCH_TATTOOIST = gql`
  query fetchTattooist($tattooistId: String!) {
    fetchTattooist(tattooistId: $tattooistId) {
      id
      name
      image
      likes
      detail
      email
      phoneNumber
    }
  }
`;

export default function TattooistPage() {
  const [created, setCreated] = useState(true);
  const [portfolios, setPortfolios] = useState(false);
  const [reviews, setReviews] = useState(false);

  const router = useRouter();

  const { data } = useQuery(FETCH_TATTOOIST, {
    variables: { tattooistId: String(router.query.tattooistDetail) },
  });

  const onClickCreated = () => {
    setCreated(true);
    setPortfolios(false);
    setReviews(false);
  };

  const onClickPortfolios = () => {
    setCreated(false);
    setPortfolios(true);
    setReviews(false);
  };

  const onClickReviews = () => {
    setCreated(false);
    setPortfolios(false);
    setReviews(true);
  };

  return (
    <P.Wrapper>
      <P.MainWrapper>
        <P.DefaultSection>
          <P.Image
            src={
              data?.fetchTattooist?.image
                ? data?.fetchTattooist?.image
                : "/default.png"
            }
          />
          <P.Name>{data?.fetchTattooist?.name}</P.Name>
          <P.UserInfo>@{data?.fetchTattooist?.id}</P.UserInfo>
          <P.DivisionLine />

          <P.ContactWrapper>
            <P.ContactTextWrapper>
              <P.ContactText>email</P.ContactText>
              <P.ContactText>tel.</P.ContactText>
            </P.ContactTextWrapper>

            <P.ContactDataWrapper>
              <P.UserInfo>{data?.fetchTattooist?.email}</P.UserInfo>
              <P.UserInfo>{data?.fetchTattooist?.phoneNumber}</P.UserInfo>
            </P.ContactDataWrapper>
          </P.ContactWrapper>

          <P.DivisionLine />

          <P.Deatil>{data?.fetchTattooist?.detail}</P.Deatil>

          <P.LikeWrapper>
            <P.LikeIcon>
              <FaRegHeart />
            </P.LikeIcon>
            <P.Likes>{data?.fetchTattooist?.likes}</P.Likes>
          </P.LikeWrapper>
        </P.DefaultSection>

        <P.MenuOuterWrapper>
          <P.VerticalLine></P.VerticalLine>

          <P.MenuWrapper>
            <P.Menu
              onClick={onClickCreated}
              style={{ color: created ? "black" : "#bdbdbd" }}
            >
              Created Tattoos
            </P.Menu>
            <P.Menu
              onClick={onClickPortfolios}
              style={{ color: portfolios ? "black" : "#bdbdbd" }}
            >
              Portfolios
            </P.Menu>
            <P.Menu
              onClick={onClickReviews}
              style={{ color: reviews ? "black" : "#bdbdbd" }}
            >
              Reviews
            </P.Menu>
          </P.MenuWrapper>
        </P.MenuOuterWrapper>

        <P.ContainerSection>
          {created && <CreatedTattooContainer />}
          {portfolios && <PortfoliosContainer />}
          {reviews && <ReviewsContainer />}
        </P.ContainerSection>
      </P.MainWrapper>
    </P.Wrapper>
  );
}
