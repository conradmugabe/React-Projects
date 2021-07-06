const InputContainer = ({ value, onChange, ans }) => {
  return (
    <div className="input__container">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly
      />
      <h2 className="ans">{ans}</h2>
    </div>
  );
};

export default InputContainer;
