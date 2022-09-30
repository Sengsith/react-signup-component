const CardFooter = (props) => {
  const { body, body_inner } = props;
  
  return (
    <div className="CardFooter">
      <p>{body}<span>{body_inner}</span></p>
    </div>
  );
}

export default CardFooter;