import CardForm from './CardForm';

const Card = (props) => {
  const { INPUTS, button, body, body_inner } = props;

  return (
    <div className="Card">
      <CardForm INPUTS={INPUTS} button={button} body={body} body_inner={body_inner}/>
    </div>
  );
}

export default Card;