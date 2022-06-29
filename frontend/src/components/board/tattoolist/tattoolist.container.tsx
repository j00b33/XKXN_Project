import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import * as T from "./tattoolist.styles";
import InfiniteScroll from "react-infinite-scroller";

export const FETCH_TATTOOS = gql`
  query fetchTattoos {
    fetchTattoos {
      id
      name
      price
      tattooGenre {
        genre
      }
      tattooTags {
        tag
      }
      date
    }
  }
`;

export const FETCH_TATTOO_WITH_GENRE = gql`
  query fetchTattooWithGenre($tattooGenreId: Float!) {
    fetchTattooWithGenre(tattooGenreId: $tattooGenreId) {
      name
      price
      tattooGenre {
        genre
      }
      tattooTags {
        tag
      }
      date
    }
  }
`;

export default function TattooListContainer() {
  const [genreNum, setGenreNum] = useState(0);

  const { data, loading } = useQuery(FETCH_TATTOOS);
  const { data: genreData } = useQuery(FETCH_TATTOO_WITH_GENRE, {
    variables: {
      tattooGenreId: genreNum,
    },
  });

  const router = useRouter();
  if (loading) {
    return "Loading...";
  }

  const onClickDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  const onClickOne = () => {
    setGenreNum(1);
  };

  const onClickTwo = () => {
    setGenreNum(2);
  };

  const onClickThree = () => {
    setGenreNum(3);
  };

  const onClickFour = () => {
    setGenreNum(4);
  };

  const onClickFive = () => {
    setGenreNum(5);
  };

  const onClickSix = () => {
    setGenreNum(6);
  };

  const onClickSeven = () => {
    setGenreNum(7);
  };

  const onClickEight = () => {
    setGenreNum(8);
  };

  return (
    <T.Wrapper>
      <T.CategoryWrapper>
        <T.CategoryTitle>Categories</T.CategoryTitle>
        <T.Genres>
          <T.Genre onClick={onClickOne}>Classic Americana</T.Genre>
          <T.Genre onClick={onClickTwo}>New School</T.Genre>
          <T.Genre onClick={onClickThree}>Black and Grey</T.Genre>
          <T.Genre onClick={onClickFour}>Japanese</T.Genre>
          <T.Genre onClick={onClickFive}>Realism</T.Genre>
          <T.Genre onClick={onClickSix}>Protraiture</T.Genre>
          <T.Genre onClick={onClickSeven}>Black Work</T.Genre>
          <T.Genre onClick={onClickEight}>Stick and Poke</T.Genre>
        </T.Genres>
      </T.CategoryWrapper>

      <T.OuterWrapper>
        <T.SectionWrapper>
          <T.ContentTitle>Hot</T.ContentTitle>
          <T.DivisionLine />
          <T.ContentWrapper>
            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>
          </T.ContentWrapper>
        </T.SectionWrapper>

        <T.SectionWrapper>
          <T.ContentTitle>New</T.ContentTitle>
          <T.DivisionLine />
          <T.ContentWrapper>
            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>

            <T.SingleTattooBox>
              <T.TattooImage src="/dummytattoo.png" />
              <T.TattooInfoWrapper>
                <T.TattooInfo>Dummy Data</T.TattooInfo>
                <T.LikesWrapper>
                  <T.LikeIcon>
                    <FaRegHeart />
                  </T.LikeIcon>
                  <T.TattooInfo>13,257</T.TattooInfo>
                </T.LikesWrapper>
              </T.TattooInfoWrapper>
            </T.SingleTattooBox>
          </T.ContentWrapper>
        </T.SectionWrapper>
      </T.OuterWrapper>
    </T.Wrapper>
  );
}
