import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Barlow";
    src: url("/fonts/Barlow-Regular.ttf");
  }

  @font-face {
    font-family: "Darker Grotesque";
    src: url("/fonts/DarkerGrotesque-Regular.ttf");
  }
`;
