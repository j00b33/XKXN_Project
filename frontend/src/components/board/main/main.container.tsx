import * as M from "./main.styles";
import { FaRegHeart } from "react-icons/fa";

export default function MainPageContainer() {
  return (
    <M.Wrapper>
      <M.Banner>
        <M.TextWrapper>
          <M.BannerText>Monthly Trend</M.BannerText>
          <M.BannerDivisionLine />
          <M.GenreName>New School</M.GenreName>
        </M.TextWrapper>
      </M.Banner>

      <M.BestWrapper>
        {/* ========== Best Tattoos ========== */}
        <M.BestTattoo>
          <M.BestTitle>Best Tattoos</M.BestTitle>
          <M.BestDivisionLine />
          <M.BestContentWrapper>
            {/* example dummy data */}
            <M.SingleTattoo>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattoo>

            <M.SingleTattoo>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattoo>

            <M.SingleTattoo>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattoo>
            {/* dummy data end */}
          </M.BestContentWrapper>
        </M.BestTattoo>

        {/* ========== Best Tattooists ========== */}
        <M.BestTattooist>
          <M.BestTitle>Best Tattooists</M.BestTitle>
          <M.BestDivisionLine />
          <M.BestContentWrapper>
            {/* example dummy data */}
            <M.SingleTattooist>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattooist>

            <M.SingleTattooist>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattooist>

            <M.SingleTattooist>
              <M.BestImage src="/dummytattoo.png" />
              <M.BestName>BestName</M.BestName>
              <M.BestId>@tattooistId</M.BestId>
              <M.BestLikeWrapper>
                <M.HeartIcon>
                  <FaRegHeart />
                </M.HeartIcon>
                <M.BestLikes>13,289</M.BestLikes>
              </M.BestLikeWrapper>
            </M.SingleTattooist>
            {/* dummy data end */}
          </M.BestContentWrapper>
        </M.BestTattooist>
      </M.BestWrapper>
    </M.Wrapper>
  );
}
