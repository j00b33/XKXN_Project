/* eslint-disable @next/next/no-sync-scripts */
import { gql, useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { TiThSmall } from "react-icons/ti";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";
import * as D from "./tattooDetail.styles";
import { useEffect, useState } from "react";
import { Modal } from "antd";

export const FETCH_TATTOO = gql`
  query fetchTattoo($tattooId: String!) {
    fetchTattoo(tattooId: $tattooId) {
      id
      name
      price
      detail
      tattooGenre {
        id
        genre
      }
      size
      region
      period
      date
      likes
      isSold
      isDone
      tattooist {
        id
        name
      }
      tattooImageUrl
    }
  }
`;

export const MARK_SOLD = gql`
  mutation markSold($tattooId: String!) {
    markSold(tattooId: $tattooId) {
      id
      isSold
    }
  }
`;

export const MARK_DONE = gql`
  mutation markDone($tattooId: String!) {
    markDone(tattooId: $tattooId)
  }
`;

export const LIKE_TATTOO = gql`
  mutation likeTattoo($tattooId: String!) {
    likeTattoo(tattooId: $tattooId)
  }
`;

export const CANCEL_LIKE_TATTOO = gql`
  mutation cancelLikeTattoo($tattooId: String!) {
    cancelLikeTattoo(tattooId: $tattooId)
  }
`;

// (if needed)
// export const CREATE_RECEIPT = gql`
//   mutation createReceipt($impUid: String!, $price: Float!, $tattooId: String!) {
//     createReceipt(impUid: $impUid, price: $price, tattooId: $tattooId) {
//       id
//       price
//     }
//   }
// `;

export default function TattooDetailContainer() {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [viewed, setViewed] = useState([]);

  const { data } = useQuery(FETCH_TATTOO, {
    variables: { tattooId: String(router.query.tattooDetail) },
  });

  const onClickList = () => {
    router.push("/board/tattooList");
  };

  const onClickDetail = (el) => (event) => {
    router.push(`/board/${event.currentTarget.id}`);
    console.log(event.target.id);
  };

  const onClickTattooist = (event) => {
    router.push(`/user/tattooistPage/${event.target.id}`);
  };

  //currentTarget vs. target => event id taking difference

  const [likeTattoo] = useMutation(LIKE_TATTOO);
  const [cancelLikeTattoo] = useMutation(CANCEL_LIKE_TATTOO);

  const onClickLike = async () => {
    setIsLiked((prev) => !prev);

    if (isLiked === true) {
      await cancelLikeTattoo({
        variables: {
          tattooId: String(data?.fetchTattoo?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOO,
            variables: {
              tattooId: String(data?.fetchTattoo?.id),
            },
          },
        ],
      });
    }
    if (isLiked === false) {
      await likeTattoo({
        variables: {
          tattooId: String(data?.fetchTattoo?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOO,
            variables: {
              tattooId: String(data?.fetchTattoo?.id),
            },
          },
        ],
      });
    }
  };

  const [markDone] = useMutation(MARK_DONE);

  const onClickDone = async () => {
    try {
      await markDone({
        variables: {
          tattooId: String(data?.fetchTattoo?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOO,
            variables: {
              tattooId: String(data?.fetchTattoo?.id),
            },
          },
        ],
      });
      setIsDone(true);
      Modal.success({
        content: "Marked Done",
      });
    } catch (error) {
      Modal.error({ content: "Error" });
    }
  };

  const [markSold] = useMutation(MARK_SOLD);

  const onClickSold = async () => {
    try {
      await markSold({
        variables: {
          tattooId: String(data?.fetchTattoo?.id),
        },
        refetchQueries: [
          {
            query: FETCH_TATTOO,
            variables: {
              tattooId: String(data?.fetchTattoo?.id),
            },
          },
        ],
      });
      Modal.success({
        content: "Tattoo Successfully Registered",
      });
    } catch (error) {
      Modal.error({ content: "Error" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recentData = JSON.parse(
        localStorage.getItem("Recent View" || "[]")
      );
      setViewed(recentData);
    }
  }, []);

  return (
    <D.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <D.MainWrapper>
        <D.RecentViewWrapper>
          <D.RecentViewTitle>Recent</D.RecentViewTitle>
          <D.RecentContentWrapper>
            {viewed &&
              viewed.map((el) => (
                <D.RecentImg
                  id={el.id}
                  key={el.id}
                  src={el.tattooImageUrl ? el.tattooImageUrl : "/default.png"}
                  onClick={onClickDetail(el)}
                />
              ))}
          </D.RecentContentWrapper>
        </D.RecentViewWrapper>

        <D.Image
          src={
            data?.fetchTattoo.tattooImageUrl
              ? data?.fetchTattoo.tattooImageUrl
              : "/default.png"
          }
        />
        <D.InfoWrapper>
          <D.Headers>
            {/* Header */}
            <D.InfoHeader>
              <D.HeaderText>$ {data?.fetchTattoo.price}</D.HeaderText>
              <D.HeaderText>{data?.fetchTattoo.name}</D.HeaderText>
            </D.InfoHeader>

            {/* Header */}
            <D.SubHeader>
              <D.TatooistName
                onClick={onClickTattooist}
                id={data?.fetchTattoo?.tattooist.id}
              >
                Tattooist {data?.fetchTattoo?.tattooist.name} :: @
                {data?.fetchTattoo?.tattooist.id}
              </D.TatooistName>
              <D.SubHeaderText>
                {data?.fetchTattoo.date.slice(0, 10)}
              </D.SubHeaderText>
            </D.SubHeader>
          </D.Headers>

          {/* Main Info */}
          <D.MainInfoWrapper>
            <D.SingleInfo>
              <D.Info>Region</D.Info>
              <D.InfoData>{data?.fetchTattoo.region}</D.InfoData>
            </D.SingleInfo>

            <D.SingleInfo>
              <D.Info>Period</D.Info>
              <D.InfoData>{data?.fetchTattoo.period}</D.InfoData>
            </D.SingleInfo>

            <D.SingleInfo>
              <D.Info>Genre</D.Info>
              <D.InfoData>{data?.fetchTattoo.tattooGenre.genre}</D.InfoData>
            </D.SingleInfo>

            <D.SingleInfo>
              <D.Info>Size</D.Info>
              <D.InfoData>{data?.fetchTattoo.size}</D.InfoData>
            </D.SingleInfo>

            <D.SingleInfo>
              <D.Info>Detail</D.Info>
              <D.InfoData>{data?.fetchTattoo.detail}</D.InfoData>
            </D.SingleInfo>
          </D.MainInfoWrapper>

          <D.Tools>
            <D.SingleTool onClick={onClickList}>
              <D.ToolIcon>
                <TiThSmall />
              </D.ToolIcon>
              <D.ToolText>List</D.ToolText>
            </D.SingleTool>

            <D.SingleTool>
              <D.ToolIcon onClick={onClickLike}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </D.ToolIcon>
              <D.ToolText>
                {String(data?.fetchTattoo.likes).length > 3
                  ? data?.fetchTattoo.likes.toLocaleString()
                  : data?.fetchTattoo.likes}
              </D.ToolText>
            </D.SingleTool>

            {data?.fetchTattoo.isDone ? null : (
              <D.SingleTool>
                <D.ToolIcon onClick={onClickSold}>
                  {data?.fetchTattoo.isSold ? (
                    <MdOutlineCreditCardOff />
                  ) : (
                    <AiOutlineCreditCard />
                  )}
                </D.ToolIcon>
                <D.ToolText>
                  {data?.fetchTattoo.isSold ? "Registerd" : "Register"}
                </D.ToolText>
              </D.SingleTool>
            )}

            {data?.fetchTattoo.isPortfolio ? null : (
              <D.SingleTool onClick={onClickDone}>
                {data?.fetchTattoo.isDone ? null : (
                  <D.ToolIcon>
                    <BsCheck2 />
                  </D.ToolIcon>
                )}
                {data?.fetchTattoo.isDone ? null : (
                  <D.ToolText>Mark Done</D.ToolText>
                )}
              </D.SingleTool>
            )}
          </D.Tools>
        </D.InfoWrapper>
      </D.MainWrapper>
    </D.Wrapper>
  );
}
