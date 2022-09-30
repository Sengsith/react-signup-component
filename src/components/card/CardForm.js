import CardInput from './CardInput';
import CardButton from './CardButton';
import CardFooter from './CardFooter';

const CardForm = (props) => {
  const { INPUTS, button, body, body_inner } = props;

  // 
  const validate = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByClassName("InputInner");
    const errors = document.getElementsByClassName("ErrorMessage");
    const icons = document.getElementsByClassName("ErrorIcon");
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Check if email address is incorrect
    if (inputs[2].value === "") { // First check if input is empty
    errors[2].innerText = "Email Address cannot be empty";
    } else if (!regex.test(inputs[2].value)) { // If it is not empty and email address is not valid
      errors[2].innerText = "Please enter a valid email address";
      errors[2].style.display = "inline";
      icons[2].style.display = "inline";
    }

    // Show error messages if empty inputs
    for (let i = 0; i < errors.length; i++) {
      if (inputs[i].value === "") { // Check for empty input
        errors[i].style.display = "inline";
        icons[i].style.display = "inline";
      }
    }
  }

  return (
    <form className="CardForm" autoComplete="off">
      {INPUTS.map(input => (
        <CardInput
        key={input.id}
        id={input.id}
        errormessage={input.errormessage}
        {...input} />
      ))}
      <CardButton button={button} validate={validate}/>
      <CardFooter body={body} body_inner={body_inner}/>
    </form>
  );
}

export default CardForm;