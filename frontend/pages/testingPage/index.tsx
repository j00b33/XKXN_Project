import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       <Slider {...settings}>
//         <Wrapper>1</Wrapper>
//         <Wrapper>2</Wrapper>
//         <Wrapper>3</Wrapper>
//         <Wrapper>4</Wrapper>
//       </Slider>
//       asdf
//     </div>
//   );
// }

// const Wrapper = styled.div`
//   height: 200px;
//   background-color: #64748b;
// `;

const Button = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;

  width: 200px;
  height: 50px;
  border: 1px solid black;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    color: green;
  }
`;
export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };

  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa); //aaa=철수; zzz=맹구 => 세미콜론이 붙어서 나옴 ;

    const aaa = document.cookie //
      .split("; ") //["aaa=철수" , "zzz=맹구"]
      .filter((el) => el.startsWith("aaa="))[0]; // ["aaa=철수"][0] 필터는 배열이기에 철수가 배열에 담겨서 출력

    const result = aaa.replace("aaa=", "");

    console.log(result);
  };

  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <Button onClick={onClickSaveCookie}>쿠키 저장</Button>
      <Button onClick={onClickSaveLocal}>로컬 저장</Button>
      <Button onClick={onClickSaveSession}>세션 저장</Button>
      <br />
      <Button onClick={onClickGetCookie}>쿠키 조회</Button>
      <Button onClick={onClickGetLocal}>로컬 조회</Button>
      <Button onClick={onClickGetSession}>세션 조회</Button>
    </div>
  );
}
