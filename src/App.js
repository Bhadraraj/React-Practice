
import './App.css';
import State from './state';
import List from './List';
// import DateComp from './DateComp';
import DateFnsComp from './DateFnsComp';
import NameChange from './components/NameChange';
import StyleObj from './components/StyleObj';
import Event from './components/Event';
import UseState from './components/UseState';
// import TodoList from './components/TodoList';
import TodoListMain  from './components/TodoListMain';
import UserCard from './components/UserCard';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <>
      <div className='header'>
        <h1 id='title'>   React JS - The Java Script  Library</h1>
      </div>
      <UserCard/> 
      <HeaderBar/>
      <Footer/>
      <State />
      <StyleObj/>
      <UseState/> 
      <br/>
      {/* <TodoList/> */}


<Event/>
      <List />
      {/* <DateComp/> */}

      <DateFnsComp/>
      <NameChange/>
      <TodoListMain/>



    </>

  );
}

export default App;
