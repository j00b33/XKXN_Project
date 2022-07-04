import * as U from "./upload.styles";

export default function UploadPresenter(props) {
  return (
    <U.Wrapper>
      <U.MainWrapper>
        <U.ImageBox>
          <U.ImageInfoText> + Upload Image</U.ImageInfoText>
        </U.ImageBox>

        <U.InputOutBox>
          <U.TattooNameInput
            onChange={props.onChangeName}
            placeholder="Tattoo Name"
          />

          <U.MainInfoInputWrapper>
            <U.LeftSubjectWrapper>
              <U.InputSubject>Price </U.InputSubject>
              <U.InputSubject>Period </U.InputSubject>
              <U.InputSubject>Region </U.InputSubject>
              <U.InputSubject>Size </U.InputSubject>
              <U.InputSubject>Genre </U.InputSubject>
              <U.InputSubject>Detail </U.InputSubject>
            </U.LeftSubjectWrapper>

            <U.RightInfoWrapper>
              <U.Input onChange={props.onChangePrice} placeholder="200" />
              <U.Input onChange={props.onChangePeriod} placeholder="N hrs" />
              <U.Input onChange={props.onChangeRegion} placeholder="Seoul" />
              <U.Input onChange={props.onChangeSize} placeholder="00cm" />
              <U.SmallSelectionWrapper onChange={props.onChangeGenre}>
                <option disabled={true} selected={true}>
                  Select a genre
                </option>
                <option value={1}>Classic Americana</option>
                <option value={2}>New School</option>
                <option value={3}>Black and Grey</option>
                <option value={4}>Japanese</option>
                <option value={5}>Realism</option>
                <option value={6}>Portraiture</option>
                <option value={7}>Black Work</option>
                <option value={8}>Stick and Poke</option>
              </U.SmallSelectionWrapper>
              <U.DetailInputWrapper>
                <U.Input
                  placeholder="Detail goes here"
                  onChange={props.onChangeDetail}
                />
                <U.WordCountWrapper>
                  <U.WordCount>{props.wordCount}</U.WordCount>
                  <U.WordCountText>/300</U.WordCountText>
                </U.WordCountWrapper>
              </U.DetailInputWrapper>
            </U.RightInfoWrapper>
          </U.MainInfoInputWrapper>

          <U.Button onClick={props.onClickUpload}>Upload</U.Button>
        </U.InputOutBox>
      </U.MainWrapper>
    </U.Wrapper>
  );
}
