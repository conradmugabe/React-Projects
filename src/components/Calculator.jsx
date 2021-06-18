import { useState } from "react";
import ButtonSection from "./ButtonSection";
import InputSection from "./InputSection";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [cal, setCal] = useState("");
  const [ans, setAns] = useState("");

  const clickButton = (label) => {
    setInput((preInput) => preInput + label);
    setCal((preCal) => preCal + label);
  };

  const calculateAns = () => {
    let ans;
    try {
      ans = eval(cal);
    } catch (error) {
      console.log(error.message);
      ans = "Error";
    }
    return ans;
  };

  const equateString = () => {
    setAns((preAns) => calculateAns());
  };

  const percentage = () => {
    setInput((preInput) => preInput + "%");
    setCal((preCal) => preCal + "/100");
  };

  const clearInput = () => {
    setAns((preInput) => "");
    setInput((preInput) => "");
    setCal((preCal) => "");
  };

  return (
    <div className="Calculator">
      <InputSection onInputChange={setInput} inputValue={input} answer={ans} />
      <ButtonSection
        onBtnClick={clickButton}
        clearInput={clearInput}
        equateString={equateString}
        percentage={percentage}
      />
    </div>
  );
};

export default Calculator;
