import ICON_ERROR from '../../images/icon-error.svg';

const CardInput = (props) => {
  const { errormessage, id, ...inputProps } = props;

  // Hides error message and icon on input change
  const handleOnChange = () => {
    document.getElementById("err_msg" + id).style.display = "none";
    document.getElementById("err_icon" + id).style.display = "none";
  }

  return (
    <div className="CardInput">
      <div className="Input">
        <input className="InputInner" id={"input" + id} {...inputProps}  onChange={handleOnChange} />
        <span><img className="ErrorIcon" id={"err_icon" + id} src={ICON_ERROR} alt="red exclamation point"/></span>
      </div>
      <span className="ErrorMessage" id={"err_msg" + id}>{errormessage}</span>
    </div>
  );
}

export default CardInput;