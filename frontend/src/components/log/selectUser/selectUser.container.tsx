import { useRouter } from "next/router";
import * as T from "./selectUser.styles";

export default function UserSelectionContainer() {
  const router = useRouter();

  const onClickTattooistSignup = () => {
    router.push("/log/tattooistsignup");
  };

  const onClickCustomerSignup = () => {
    router.push("/log/customersignup");
  };
  return (
    <T.Wrapper>
      <T.SelectionWrapper>
        <T.Title>Who Are You?</T.Title>
        <T.Selection>
          <T.Option onClick={onClickTattooistSignup}>
            <T.Image src="/signup/tattooist.png" />
            <T.Text>Tattooist</T.Text>
          </T.Option>

          <T.Option onClick={onClickCustomerSignup}>
            <T.Image src="/signup/customer.png" />
            <T.Text>Customer</T.Text>
          </T.Option>
        </T.Selection>
      </T.SelectionWrapper>
    </T.Wrapper>
  );
}
