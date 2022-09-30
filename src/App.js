import './scss/style.scss';

import Header from './components/Header';
import HeaderSub from './components/HeaderSub';
import Card from './components/card/Card';
import Attribution from './components/Attribution';

const App = () => {
  const INPUTS = [{
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    errormessage: "First Name cannot be empty",
    required: true,
    // refer: userRef
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    errormessage: "Last Name cannot be empty",
    required: true,
    // refer: userRef
  },
  {
    id: 3,
    name: "emailAddress",
    type: "email",
    placeholder: "Email Address",
    errormessage: "Email Address cannot be empty",
    required: true,
    // refer: userRef
  },
  {
  id: 4,
  name: "password",
  type: "password",
  placeholder: "Password",
  errormessage: "Password cannot be empty",
  required: true,
  // refer: userRef
  }];

  return (
    <div className="App">
      <main>
        <Header header="Learn to code by watching others" content="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."/>
        <div className="GridCol">
          <HeaderSub header="Try it free 7 days " header_regular="then $20/mo. thereafter"/>
          <Card INPUTS={INPUTS} button="CLAIM YOUR FREE TRIAL" body="By clicking the button, you are agreeing to our " body_inner="Terms and Services"/>
        </div>
      </main>
      <Attribution />
    </div>
  );
}

export default App;
