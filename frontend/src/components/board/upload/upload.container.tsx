import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import UploadPresenter from "./upload.presenter";

export const CREATE_TATTOO = gql`
  mutation createTattoo($createTattooInput: CreateTattooInput!) {
    createTattoo(createTattooInput: $createTattooInput) {
      id
    }
  }
`;

export default function UploadTattooContainer() {
  const [createTattoo] = useMutation(CREATE_TATTOO);

  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [region, setRegion] = useState("");
  const [period, setPeriod] = useState("");
  const [size, setSize] = useState("");
  const [genre, setGenre] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
  };

  const onChangePeriod = (event) => {
    setPeriod(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    setWordCount(detail.length + 1);
  };

  const onChangeRegion = (event) => {
    setRegion(event.currentTarget.value);
  };

  const onChangeSize = (event) => {
    setSize(event.target.value);
  };

  const onChangeGenre = (event) => {
    setGenre(Number(event.target.value));
  };

  const onClickUpload = async () => {
    try {
      const result = await createTattoo({
        variables: {
          createTattooInput: {
            name,
            price,
            detail,
            region,
            period,
            size,
            tattooGenreId: genre,
            isPortfolio: false,
          },
        },
      });
      Modal.success({ content: "Tattoo successfully uploaded" });
      router.push(`/board/${result.data.createTattoo.id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UploadPresenter
      onChangeName={onChangeName}
      onChangePeriod={onChangePeriod}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onChangeRegion={onChangeRegion}
      onChangeSize={onChangeSize}
      onChangeGenre={onChangeGenre}
      wordCount={wordCount}
      onClickUpload={onClickUpload}
    />
  );
}
