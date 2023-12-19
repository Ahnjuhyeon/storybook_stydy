import { styled } from "styled-components";
import ButtonPage from "../components/button";
import InputPage from "../components/input";

const MainPage = () => {
  return (
    <Wrapper>
      <h2>Main Page</h2>
      <Primary>
        <ButtonPage size="largeCircle" variant="primary" font="large">
          button
        </ButtonPage>
        <ButtonPage size="smallCircle" variant="primary" font="small">
          button
        </ButtonPage>
        <InputPage variant="primary" size="large" font="large" />
        <InputPage variant="primary" size="small" font="small" />
      </Primary>
      <Secondary>
        <ButtonPage size="largeCircle" variant="secondary" font="large">
          button
        </ButtonPage>
        <ButtonPage size="smallCircle" variant="secondary" font="small">
          button
        </ButtonPage>
        <InputPage variant="secondary" size="large" font="large" />
        <InputPage variant="secondary" size="small" font="small" />
      </Secondary>
    </Wrapper>
  );
};
export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 8%;

    & > button {
      margin-left: 2%;
    }
  }
`;
const Primary = styled.div``;
const Secondary = styled.div``;
