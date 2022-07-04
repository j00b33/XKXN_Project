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
import { useState } from "react";

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
    }
  }
`;

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

  const { data } = useQuery(FETCH_TATTOO, {
    variables: { tattooId: String(router.query.tattooDetail) },
  });

  const onClickList = () => {
    router.push("/board/tattooList");
  };

  console.log(data);

  const onClickLike = () => {
    setIsLiked((prev) => !prev);
  };

  const onClickDone = () => {
    setIsDone(true);
  };

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
        </D.RecentViewWrapper>
        <D.Image src={"/dummytattoo.png"} />
        <D.InfoWrapper>
          <D.Headers>
            {/* Header */}
            <D.InfoHeader>
              <D.HeaderText>$ {data?.fetchTattoo.price}</D.HeaderText>
              <D.HeaderText>{data?.fetchTattoo.name}</D.HeaderText>
            </D.InfoHeader>

            {/* Header */}
            <D.SubHeader>
              <D.SubHeaderText>
                Tattooist Hanse :: @_hanse_the_tatt
              </D.SubHeaderText>
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
              <D.ToolText>Likes</D.ToolText>
            </D.SingleTool>

            <D.SingleTool>
              <D.ToolIcon>
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

            {data?.fetchTattoo.isSold ? (
              <D.SingleTool onClick={onClickDone}>
                <D.ToolIcon>
                  <BsCheck2 />
                </D.ToolIcon>
                <D.ToolText>
                  {data?.fetchTattoo.isDone ? "Done" : "Mark Done"}
                </D.ToolText>
              </D.SingleTool>
            ) : null}
          </D.Tools>
        </D.InfoWrapper>
      </D.MainWrapper>
    </D.Wrapper>
  );
}
