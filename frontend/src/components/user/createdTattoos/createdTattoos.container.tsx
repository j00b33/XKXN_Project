import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IoBanOutline } from "react-icons/io5";
import * as CT from "./createdTattoos.style";

export const FETCH_TATTOOS_IN_TTPAGE = gql`
  query fetchTattoosInTTPage($tattooistId: String!) {
    fetchTattoosInTTPage(tattooistId: $tattooistId) {
      id
      tattooImageUrl
    }
  }
`;

export default function CreatedTattooContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_TATTOOS_IN_TTPAGE, {
    variables: { tattooistId: String(router.query.tattooistDetail) },
  });

  const onClickDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <CT.Wrapper>
      {data?.fetchTattoosInTTPage.length > 0 ? (
        data?.fetchTattoosInTTPage.map((el) => (
          <CT.Image
            onClick={onClickDetail}
            key={el.id}
            id={el.id}
            src={el.tattooImageUrl ? el.tattooImageUrl : "/default.png"}
          />
        ))
      ) : (
        <CT.IfNoWrapper>
          <CT.NoIcon>
            <IoBanOutline />
          </CT.NoIcon>
          <CT.Info>There aren't any tattoos yet</CT.Info>
        </CT.IfNoWrapper>
      )}
    </CT.Wrapper>
  );
}
