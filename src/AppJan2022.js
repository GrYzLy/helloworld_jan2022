import './App.css';
import Greetings from './Greetings/Greetings';
import GreetingsArrow from './Greetings/GreetingsArrow';
import Counter from './Counter/Counter';
import LoginForm from './LoginForm/LoginForm';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import Quiz from './Quiz/Quiz';
import Lifecycle from './Lifecycle/Lifecycle';
import Router from './Router/Router';
import FetchApi from './FetchApi/FetchApi';
import CounterHooks from './Counter/CounterHooks';
import FetchApiHook from './FetchApi/FetchApiHook';

function AppJan2022() {
  return (
    <div>
      {/* <Greetings name="Janek" /> */}
      {/* <GreetingsArrow name="Staszek" /> */}
      {/* <Counter /> */}
      {/* <LoginForm /> */}
      {/* <ConditionalRendering /> */}
      {/* <Quiz /> */}
      {/* <Lifecycle /> */}
      {/* <Router /> */}
      {/* <FetchApi /> */}
      {/* <CounterHooks /> */}
      <FetchApiHook />
  </div>
  );
}

export default AppJan2022;
