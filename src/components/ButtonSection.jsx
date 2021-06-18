import Button from "./common/Button";

const ButtonSection = ({
  onBtnClick,
  clearInput,
  equateString,
  percentage,
}) => {
  const m_row_one = ["()", "/"];
  const m_row_two = ["7", "8", "9", "*"];
  const m_row_three = [4, 5, 6, "-"];
  const m_row_four = [1, 2, 3, "+"];
  const m_row_five = ["+/-", "0", "."];

  const displayBtns = (btns) => {
    return btns.map((item, index) => (
      <Button key={index} onBtnClick={onBtnClick} btnLabel={item} />
    ));
  };

  const displayEquals = (
    <Button onBtnClick={equateString} btnLabel={"="} key={m_row_five.length} />
  );

  const displayClear = (
    <Button onBtnClick={clearInput} btnLabel={"c"} key={m_row_one.length} />
  );

  const displayPercentage = (
    <Button onBtnClick={percentage} btnLabel={"%"} key={m_row_one.length + 1} />
  );

  return (
    <div className="ButtonSection">
      <div className="m-Buttons">
        {displayClear}
        {displayPercentage}
        {displayBtns(m_row_one)}
      </div>
      <div className="m-Buttons">{displayBtns(m_row_two)}</div>
      <div className="m-Buttons">{displayBtns(m_row_three)}</div>
      <div className="m-Buttons">{displayBtns(m_row_four)}</div>
      <div className="m-Buttons">
        {displayBtns(m_row_five)}
        {displayEquals}
      </div>
    </div>
  );
};

export default ButtonSection;
