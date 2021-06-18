import Input from "./common/Input";

const InputSection = ({ onInputChange, inputValue, answer }) => {
  return (
    <div className="InputSection">
      <Input onInputChange={onInputChange} inputValue={inputValue} />
      <h1>= {answer}</h1>
    </div>
  );
};

export default InputSection;
