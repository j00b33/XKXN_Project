import * as U from "./upload.styles";

export default function UploadPresenter(props) {
  return (
    <U.Wrapper>
      <U.Title>Upload Tattoo</U.Title>

      <U.DivisionLine />
      <U.Body>
        <U.Box>
          <U.Text>Tattoo Tags</U.Text>
          <U.LongInput
            onChange={props.onChangeTags}
            placeholder="ex) #flower, #birth"
          />
        </U.Box>

        <U.Box>
          <U.Text>Tattoo Name</U.Text>
          <U.LongInput
            onChange={props.onChangeName}
            placeholder="Tattoo Name"
          />
        </U.Box>

        <U.TwoBox>
          <U.Box>
            <U.Text>Process</U.Text>
            <U.Input
              onChange={props.onChangeProcess}
              placeholder="Working Process"
            />
          </U.Box>

          <U.Box>
            <U.Text>Date</U.Text>
            <U.Input onChange={props.onChangeDate} placeholder="YEAR.MM.DD" />
          </U.Box>
        </U.TwoBox>

        <U.TwoBox>
          <U.Box>
            <U.Text>Design</U.Text>
            <U.Input onChange={props.onchangeDesign} placeholder="ex) flower" />
          </U.Box>
          <U.Box>
            <U.Text>Method</U.Text>
            <U.SmallSelectionWrapper onChange={props.onChangeMethod}>
              <option disabled={true} selected={true}>
                Select a method
              </option>
              <option value={"Machine"}>Machine</option>
              <option value={"Hand Poke"}>Hand Poke</option>
            </U.SmallSelectionWrapper>
          </U.Box>
        </U.TwoBox>

        <U.TwoBox>
          <U.Box>
            <U.Text>Genre</U.Text>
            <U.SmallSelectionWrapper onChange={props.onChangeGenre}>
              <option disabled={true} selected={true}>
                Select a genre
              </option>
              <option value={"Classic Americana"}>Classic Americana</option>
              <option value={"New School"}>New School</option>
              <option value={"Japanese"}>Japanese</option>
              <option value={"Black and Grey"}>Black and Grey</option>
              <option value={"Portraiture"}>Portraiture</option>
              <option value={"Realism"}>Realism</option>
              <option value={"Blackwork"}>Blackwork</option>
              <option value={"Water Color"}>Water Color</option>
            </U.SmallSelectionWrapper>
          </U.Box>
          <U.Box>
            <U.Text>Region</U.Text>
            <U.SmallSelectionWrapper onChange={props.onChangeRegion}>
              <option disabled={true} selected={true}>
                Select Your Region
              </option>
              <option value={1}>Seoul</option>
              <option value={2}>Busan</option>
              <option value={3}>Incheon</option>
              <option value={4}>Daegu</option>
              <option value={5}>Guangju</option>
            </U.SmallSelectionWrapper>
          </U.Box>
        </U.TwoBox>

        <U.Box>
          <U.Text>Description</U.Text>
          <U.LongInput
            onChange={props.onChangeDescription}
            placeholder="Descriptions about the tattoo"
          />
        </U.Box>

        <U.TwoBox>
          <U.Box>
            <U.Text>Payment</U.Text>
            <U.Input
              onChange={props.onChangePayment}
              placeholder="Payment Method"
            />
          </U.Box>

          <U.Box>
            <U.Text>Price</U.Text>
            <U.Input
              onChange={props.onChangePrice}
              placeholder="Only enter numbers"
            />
          </U.Box>
        </U.TwoBox>

        <U.TwoBox>
          <U.Box>
            <U.Text>Body Part</U.Text>
            <U.SmallSelectionWrapper onChange={props.onChangeBodypart}>
              <option disabled={true} selected={true}>
                Select the body part
              </option>
              <option value={1}>Hand</option>
              <option value={2}>Arm</option>
              <option value={3}>Back</option>
              <option value={4}>Leg</option>
              <option value={5}>Thigh</option>
              <option value={6}>Neck</option>
              <option value={7}>Head</option>
            </U.SmallSelectionWrapper>
          </U.Box>

          <U.Box>
            <U.Text>Size</U.Text>
            <U.Input
              onChange={props.onChangeSize}
              placeholder="enter the size"
            />
          </U.Box>
        </U.TwoBox>

        <U.UploadButton onClick={props.onClickUpload}>Upload</U.UploadButton>
      </U.Body>
    </U.Wrapper>
  );
}
