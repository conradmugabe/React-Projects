const Input = ({
  inputLabel,
  onInputChange,
  inputValue,
  inputPlaceholder,
  inputType,
}) => {
  return (
    <div className="Input">
      {inputLabel && <label htmlFor={inputLabel}>{inputLabel}</label>}
      <input
        type={inputType}
        onChange={(e) => onInputChange(e.target.value)}
        value={inputValue}
        placeholder={inputPlaceholder}
        readOnly
      />
    </div>
  );
};

Input.defaultProps = {
  inputType: "text",
};

export default Input;
