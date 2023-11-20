
import './App.css';
// import State/ from './state';
import List from './List';
// import DateComp from './DateComp';
import DateFnsComp from './DateFnsComp';
import NameChange from './components/NameChange';
// import StyleObj from './components/StyleObj';
import Event from './components/Event';
// import UseState from './components/UseState';
// import TodoList from './components/TodoList';
import TodoListMain  from './components/TodoListMain';
// import UserCard from './components/UserCard';
// import Footer from './components/Footer';
// import HeaderBar from './components/HeaderBar';
//  import Greeting from './components/Greeting';
//  import LoginControl from './components/ConditionalRendering/LoginControl'
// import Map from './components/Looping/Map';
import ShoppingList from './components/ShoppingList/ShoppingList';
import ShoppingListLocalStorage from './components/ShoppingList/ShoppingList'
// import Movie1 from './components/MovieApp/Movie1';
// import MovieDemo from './components/MovieApp/MovieDemo';
import Movie from './components/MovieApp/Movie';
import DemoPage from './components/DemoPage';
function App() {
  return (
    <>  
    <Movie/>
    {/* <MovieDemo/> */}
    {/* <Movie1/> */}
    <ShoppingListLocalStorage/>
    <ShoppingList/> 
    {/* <Map/> */}
      <div className='header'>
        <h1 id='title'>   React JS - The Java Script  Library</h1>
      </div>
      {/* <LoginControl/>
      <Greeting isLoggedIn="Bhadri"/>
      <UserCard/> 
      <HeaderBar/>
      <Footer/>
      <State />
      <StyleObj/>
      <UseState/>  */}
      <br/>
      {/* <TodoList/> */}


<Event/>
      <List />
      {/* <DateComp/> */}

      <DateFnsComp/>
      <NameChange/>
      <TodoListMain/>


<DemoPage/>


    </>

  );
}

export default App;
