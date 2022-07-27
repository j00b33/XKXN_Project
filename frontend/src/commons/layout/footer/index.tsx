import * as F from "./styles";
import { useRouter } from "next/router";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkLine } from "react-icons/ri";

export default function LayoutFooter() {
  const router = useRouter();

  const onClickInstagram = () => {
    window.open("https://www.instagram.com/_pzzzb/");
  };

  const onClickKakao = () => {
    window.open("https://open.kakao.com/o/s9DcyRbe");
  };

  return (
    <F.Wrapper>
      <F.LeftBody>
        <F.Title>XKXN</F.Title>
        <F.Text>Founder: JB Park</F.Text>
        <F.Text>Company Name: KNOCK NASTY</F.Text>
        <F.Text>Address: Somewhere on Earth</F.Text>
        <F.Text></F.Text>
      </F.LeftBody>

      <F.RightBody>
        <F.Link onClick={onClickInstagram}>
          <BsInstagram />
        </F.Link>
        <F.Link onClick={onClickKakao}>
          <RiKakaoTalkLine />
        </F.Link>
      </F.RightBody>
    </F.Wrapper>
  );
}
