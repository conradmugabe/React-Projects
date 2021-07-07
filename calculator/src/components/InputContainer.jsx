const InputContainer = ({ value, onChange, ans }) => {
  return (
    <div className="input__container">
      <input
        data-testid="calc_input"
        type="text"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly
      />
      <h2 className="ans" data-testid="answer">{ans}</h2>
    </div>
  );
};

export default InputContainer;
