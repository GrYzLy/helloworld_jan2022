import './App.css';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import Counter from './Counter/Counter';
import LoginForm from './LoginForm/LoginForm';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';

function AppJan2022() {
  return (
    <div>
      {/* <Greetings name="Janek" /> */}
      {/* <GreetingsArrow name="Staszek" /> */}
      {/* <Counter /> */}
      {/* <LoginForm /> */}
      <ConditionalRendering />
  </div>
  );
}

export default AppJan2022;
