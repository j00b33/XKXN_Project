import * as M from "./main.styles";
import { FaRegHeart } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Likes } from "../../../../pages/user/tattooistPage/[tattooistDetail]/style";

export const FETCH_HOT_TATTOOS = gql`
  query fetchHotTattoos {
    fetchHotTattoos {
      id
      name
      likes
      tattooImageUrl
      tattooGenre {
        id
        genre
      }
      price
    }
  }
`;

export const FETCH_HOT_TATTOOISTS = gql`
  query fetchHotTattooist {
    fetchHotTattooists {
      id
      name
      likes
      image
    }
  }
`;

export default function MainPageContainer() {
  const { data: bestHot } = useQuery(FETCH_HOT_TATTOOS);
  const { data: bestTattooist } = useQuery(FETCH_HOT_TATTOOISTS);

  // if (bestTattooist?.fetchHotTattooists.likes > 3) {
  //   const bestTTISTLikes = bestTattooist?.fetchHotTattooists.likes
  //     .toString()
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  //   return bestTTISTLikes;
  // }

  // console.log(bestTattooist?.fetchHotTattooists[0]?.likes);

  const router = useRouter();

  const onClickDetail = (el) => (event) => {
    const recentData = JSON.parse(localStorage.getItem("Recent View") || "[]");

    if (!JSON.stringify(localStorage).includes(el.id)) {
      recentData.push(el);
    }

    // console.log("🫣", recentData.length);

    if (recentData.length < 5) {
      localStorage.setItem("Recent View", JSON.stringify(recentData));
    } else {
      recentData.shift();
      localStorage.setItem("Recent View", JSON.stringify(recentData));
    }

    localStorage.setItem("Recent View", JSON.stringify(recentData));

    router.push(`/board/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  const onClickTattooist = (event) => {
    router.push(`/user/tattooistPage/${event.currentTarget.id}`);
  };
  return (
    <M.Wrapper>
      <M.Banner>
        <M.TextWrapper>
          <M.BannerText>Monthly Trend</M.BannerText>
          <M.BannerDivisionLine />
          <M.GenreName>
            {bestHot?.fetchHotTattoos[0]?.tattooGenre.genre}
          </M.GenreName>
        </M.TextWrapper>
      </M.Banner>

      <M.BestWrapper>
        {/* ========== Best Tattoos ========== */}
        <M.BestTattoo>
          <M.BestTitle>Best Tattoos</M.BestTitle>
          <M.BestDivisionLine />
          <M.BestContentWrapper>
            {bestHot?.fetchHotTattoos.slice(0, 3)?.map((el) => (
              <M.SingleTattoo key={el.id} id={el.id}>
                <M.BestImage
                  id={el.id}
                  onClick={onClickDetail(el)}
                  src={el.tattooImageUrl ? el.tattooImageUrl : "/default.png"}
                />
                <M.BestName>{el.name}</M.BestName>
                <M.BestId id={el.price}>$ {el.price}</M.BestId>
                <M.BestLikeWrapper>
                  <M.HeartIcon>
                    <FaRegHeart />
                  </M.HeartIcon>
                  <M.BestLikes>{el.likes}</M.BestLikes>
                </M.BestLikeWrapper>
              </M.SingleTattoo>
            ))}
          </M.BestContentWrapper>
        </M.BestTattoo>

        {/* ========== Best Tattooists ========== */}
        <M.BestTattooist>
          <M.BestTitle>Best Tattooists</M.BestTitle>
          <M.BestDivisionLine />
          <M.BestContentWrapper>
            {/* example dummy data */}
            {bestTattooist?.fetchHotTattooists.slice(0, 3).map((el) => (
              <M.SingleTattooist key={el.id} id={el.id}>
                <M.BestImage
                  id={el.id}
                  onClick={onClickTattooist}
                  src={el.image ? el.image : "/default.png"}
                />
                <M.BestName>{el.name}</M.BestName>

                <M.BestId id={el.id} onClick={onClickTattooist}>
                  @{el.id}
                </M.BestId>
                <M.BestLikeWrapper>
                  <M.HeartIcon>
                    <FaRegHeart />
                  </M.HeartIcon>
                  <M.BestLikes>
                    {el.likes.length > 3
                      ? Number(
                          el.likes
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        )
                      : el.likes}
                  </M.BestLikes>
                </M.BestLikeWrapper>
              </M.SingleTattooist>
            ))}

            {/* 000 */}
          </M.BestContentWrapper>
        </M.BestTattooist>
      </M.BestWrapper>
    </M.Wrapper>
  );
}
