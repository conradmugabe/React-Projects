const Button = ({ btnLabel, btnType, onBtnClick }) => {
  const handleClick = () => {
    onBtnClick(btnLabel);
  };
  if (btnLabel) {
    return (
      <button className="Button" type={btnType} onClick={handleClick}>
        {btnLabel}
      </button>
    );
  }
  return null;
};

Button.defaultProps = {
  btnType: "button",
};

export default Button;
