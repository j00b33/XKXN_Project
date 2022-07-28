import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CreatedTattooContainer from "../../../../src/components/user/createdTattoos/createdTattoos.container";
import PortfoliosContainer from "../../../../src/components/user/portfolios/portfolios.container";
import ReviewsContainer from "../../../../src/components/user/reviews/reviews.container";
import * as P from "./style";
import EditMainInfoContainer from "../../../../src/components/user/edit/editMainInfo.container";
import ChangePasswordContainer from "../../../../src/components/user/edit/changePassword.container";

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
      igExists
    }
  }
`;

export const LIKE_TATTOOIST = gql`
  mutation likeTattooist($tattooistId: String!) {
    likeTattooist(tattooistId: $tattooistId)
  }
`;

export const CANCEL_LIKE_TATTOOIST = gql`
  mutation cancelLikeTattooist($tattooistId: String!) {
    cancelLikeTattooist(tattooistId: $tattooistId)
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

  const [modal, setModal] = useState(false);

  const onClickEdit = () => {
    setModal(true);
  };

  const onClickEditOff = () => {
    setModal(false);
  };

  const [liked, setLiked] = useState(false);
  const [likeTattooist] = useMutation(LIKE_TATTOOIST);
  const [cancelLikeTattooist] = useMutation(CANCEL_LIKE_TATTOOIST);

  const onClickLike = async () => {
    setLiked((prev) => !prev);

    if (liked === true) {
      await cancelLikeTattooist({
        variables: {
          tattooistId: String(data?.fetchTattooist?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOOIST,
            variables: {
              tattooistId: String(router.query.tattooistDetail),
            },
          },
        ],
      });
    }

    if (liked === false) {
      await likeTattooist({
        variables: {
          tattooistId: String(data?.fetchTattooist?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOOIST,
            variables: {
              tattooistId: String(router.query.tattooistDetail),
            },
          },
        ],
      });
    }
  };

  const onClickInstagram = () => {
    window.open(`https://www.instagram.com/${data?.fetchTattooist?.id}/`);
  };

  const [editMainInfo, setEditMainInfo] = useState(true);
  const [changePw, setChangePw] = useState(false);
  const onClickEditMainInfo = () => {
    setEditMainInfo(true);
    setChangePw(false);
  };

  const onClickChangePassword = () => {
    setEditMainInfo(false);
    setChangePw(true);
  };

  return (
    <P.Wrapper>
      <P.MainWrapper style={{ filter: modal && "blur(10px)" }}>
        <P.DefaultSection>
          <P.Image
            src={
              data?.fetchTattooist?.image
                ? data?.fetchTattooist?.image
                : "/default.png"
            }
          />
          <P.NameEditGroup>
            <P.Name>{data?.fetchTattooist?.name}</P.Name>
            <P.EditIcon onClick={onClickEdit}>
              <GrEdit />
            </P.EditIcon>
          </P.NameEditGroup>
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

          <P.Instagram onClick={onClickInstagram}>
            {data?.fetchTattooist?.igExists ? <IoLogoInstagram /> : null}
          </P.Instagram>

          <P.DivisionLine />

          <P.Deatil>{data?.fetchTattooist?.detail}</P.Deatil>

          <P.LikeWrapper>
            <P.LikeIcon onClick={onClickLike}>
              {liked ? <FaHeart /> : <FaRegHeart />}
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
      {/* Edit Modal goes here */}
      {modal && (
        <P.EditModalWrapper>
          <P.Quit onClick={onClickEditOff}>X</P.Quit>
          <P.EditHeader>
            <P.EditSelection
              onClick={onClickEditMainInfo}
              style={{ color: editMainInfo ? "black" : "#bdbdbd" }}
            >
              Edit Main Info
            </P.EditSelection>
            <P.EditSelection
              onClick={onClickChangePassword}
              style={{ color: changePw ? "black" : "#bdbdbd" }}
            >
              Change Password
            </P.EditSelection>
          </P.EditHeader>
          <P.EditDivisionLine />

          <P.Editcontent>
            {editMainInfo ? (
              <EditMainInfoContainer />
            ) : (
              <ChangePasswordContainer />
            )}
          </P.Editcontent>
        </P.EditModalWrapper>
      )}
    </P.Wrapper>
  );
}
