import Button from "./Button";

const Buttons = ({ btnList, actions }) => {
  let displayBtns = btnList.map((btn, index) => {
    if (btn.text === "C") {
      return (
        <Button key={index} buttonDetails={btn} buttonClick={actions.clear} />
      );
    } else if (btn.text === "=") {
      return (
        <Button key={index} buttonDetails={btn} buttonClick={actions.equate} />
      );
    } else {
      return (
        <Button
          key={index}
          buttonDetails={btn}
          buttonClick={actions.enterBtn}
        />
      );
    }
  });
  return <>{displayBtns}</>;
};

export default Buttons;
