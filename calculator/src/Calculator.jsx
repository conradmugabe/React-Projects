import InputContainer from "./components/InputContainer";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  const [text, setText] = useState([]);
  const [value, setValue] = useState([]);

  function enterBtn(btnText, btnValue) {
    if (text.length === 0 && btnText === "0") {
    } else {
      setText((preText) => [...preText, btnText]);
      setValue((preValue) => [...preValue, btnValue]);
      setInput((preInput) => preInput + btnText);
    }
  }

  function equate() {
    let ans = value.join("");
    console.log(ans);
    setAns(eval(ans));
  }

  function clear() {
    setInput("");
    setAns("");
    setText([]);
    setValue([]);
  }

  const funcs = { clear, equate, enterBtn };
  return (
    <div className="container">
      <InputContainer ans={ans} value={input} onChange={setValue} />
      <ButtonContainer actions={funcs} />
    </div>
  );
};

export default Calculator;
