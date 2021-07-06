import { btnRow1, btnRow2, btnRow3, btnRow4, btnRow5 } from "../btns";
import Buttons from "./Buttons";

const ButtonContainer = ({ actions }) => {
  return (
    <>
      <Buttons btnList={btnRow1} actions={actions} />
      <Buttons btnList={btnRow2} actions={actions} />
      <Buttons btnList={btnRow3} actions={actions} />
      <Buttons btnList={btnRow4} actions={actions} />
      <Buttons btnList={btnRow5} actions={actions} />
    </>
  );
};

export default ButtonContainer;
