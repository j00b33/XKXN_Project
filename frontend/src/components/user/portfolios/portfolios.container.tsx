import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IoBanOutline } from "react-icons/io5";
import * as P from "./portfolios.style";

export const FETCH_PORTFOLIOS = gql`
  query fetchPortfolios($tattooistId: String!) {
    fetchPortfolios(tattooistId: $tattooistId) {
      id
      tattooImageUrl
    }
  }
`;

export default function PortfoliosContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PORTFOLIOS, {
    variables: { tattooistId: String(router.query.tattooistDetail) },
  });

  const onClickDetail = (event) => {
    router.push(`/board/${event.currentTarget.id}`);
  };

  return (
    <P.Wrapper>
      {data?.fetchPortfolios.length > 0 ? (
        data?.fetchPortfolios.map((el) => (
          <P.Image
            onClick={onClickDetail}
            id={el.id}
            key={el.id}
            src={el.tattooImageUrl ? el.tattooImageUrl : "/default.png"}
          />
        ))
      ) : (
        <P.IfNoWrapper>
          <P.NoIcon>
            <IoBanOutline />
          </P.NoIcon>
          <P.Info>There aren't any portfolios yet</P.Info>
        </P.IfNoWrapper>
      )}
    </P.Wrapper>
  );
}
