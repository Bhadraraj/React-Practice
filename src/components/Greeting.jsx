import React  from "react";
import GuestGreeting from './GuestGreetings';
import UserGreeting from './UserGreeting';
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting name="Bhadri"/>;
  }
  return <GuestGreeting />;
  
}
export default Greeting;