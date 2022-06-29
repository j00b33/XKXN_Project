import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import UploadPresenter from "./upload.presenter";

export const CREATE_TATTOO = gql`
  mutation createTattoo($createTattooInput: CreateTattooInput!) {
    createTattoo(createTattooInput: $createTattooInput) {
      id
      region
    }
  }
`;

export default function UploadTattooContainer() {
  const [createTattoo] = useMutation(CREATE_TATTOO);

  const router = useRouter();

  const [name, setName] = useState("");

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [process, setProcess] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState("");
  const [region, setRegion] = useState(0);

  const [bodypart, setBodypart] = useState(0);
  const [size, setSize] = useState("");
  const [design, setDesign] = useState("");
  const [tags, setTags] = useState([]);
  const [method, setMethod] = useState("");
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };

  const onChangeProcess = (event) => {
    setProcess(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeDesign = (event) => {
    setDesign(event.target.value);
  };

  const onChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const onChangeRegion = (event) => {
    setRegion(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onChangeBodypart = (event) => {
    setBodypart(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const onChangeSize = (event) => {
    setSize(event.target.value);
    console.log(event.target.value);
  };

  const onChangeGenre = (event) => {
    setGenre(event.target.value);
  };

  const onClickUpload = async () => {
    try {
      const result = await createTattoo({
        variables: {
          createTattooInput: {
            name,
            price,
            description,
            process,
            payment,
            date,
            tattooMethod: { method },
            tattooDesign: { name: design },
            tattooRegionId: region,
            tattooTags: tags,
            tattooBodypart: {
              bodypart,
              size,
            },
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
      onChangeProcess={onChangeProcess}
      onChangeDate={onChangeDate}
      onChangeDescription={onChangeDescription}
      onChangePayment={onChangePayment}
      onChangePrice={onChangePrice}
      onChangeRegion={onChangeRegion}
      onClickUpload={onClickUpload}
      onChangeBodypart={onChangeBodypart}
      onChangeDesign={onChangeDesign}
      onChangeMethod={onChangeMethod}
      onChangeGenre={onChangeGenre}
      onChangeSize={onChangeSize}
    />
  );
}
