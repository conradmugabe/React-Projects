const Button = ({ buttonDetails, buttonClick }) => {
  const { hide, text, value, input } = buttonDetails;
  let classes = hide ? "btn btn__hide" : "btn";
  const handleClick = () => {
    buttonClick(input, value);
  };
  return (
    <button className={classes} type="text" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
