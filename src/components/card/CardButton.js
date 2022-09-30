const CardButton = (props) => {
  const { button } = props;

  return (
    <div className="CardButton">
      <button onClick={props.validate}>{button}</button>
    </div>
  );
}

export default CardButton;