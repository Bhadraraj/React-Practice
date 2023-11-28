
import './App.css';
// import State/ from './state';
// import List from './List';
// import DateComp from './DateComp';
// import DateFnsComp from './DateFnsComp';
// import NameChange from './components/NameChange';
// import StyleObj from './components/StyleObj';
// import Event from './components/Event';
// import UseState from './components/UseState';
// import TodoList from './components/TodoList';
// import TodoListMain  from './components/TodoListMain';
// import UserCard from './components/UserCard';
// import Footer from './components/Footer';
// import HeaderBar from './components/HeaderBar';
//  import Greeting from './components/Greeting';
//  import LoginControl from './components/ConditionalRendering/LoginControl'
// import Map from './components/Looping/Map';
// import ShoppingList from './components/ShoppingList/ShoppingList';
// import ShoppingListLocalStorage from './components/ShoppingList/ShoppingList'
// import Movie1 from './components/MovieApp/Movie1';
// import MovieDemo from './components/MovieApp/MovieDemo';
// import Movie from './components/MovieApp/Movie';
// import DemoPage from './components/DemoPage';
// import WeatherMain from './components/WeatherApp/MainComp';
// import WeatherList from './components/WeatherList/WeatherList';
import HomePage from './components/Routing/HomePage';
import ContactPage from './components/Routing/ContactPage';
import AboutPage from './components/Routing/AboutPage';
import Product from './components/Routing/Product';
import NewProduct from './components/Routing/NewProduct';
import DemoProduct from './components/Routing/DemoProduct';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Nav from './components/Routing/Nav';
import PageNotFound from './components/Routing/PageNotFound'
import FormObject from './components/UseState/FormObject';
import NestedObject from './components/UseState/NestedObject';


import Todo from './components/UseState/AddTodo/Todo';
function App() {
  return (
    <>
    <Todo/>
<FormObject/>
<NestedObject/>
      <Router>   <Nav />

        <Routes>
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='/Product' element={<Product />} />
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='/NewProduct' element={<NewProduct />} />
          <Route path='/NewProduct/:id' element={<Product />} />
          <Route path='/NewProduct/demoProd' element={<DemoProduct />} /> */}

          <Route path='/' element={<HomePage />} />
          {/* <Route path='/' component={HomePage} />
        <Route path='/About' component={AboutPage} />
        <Route path='/Contact' component={ContactPage} /> */}


          {/* Nested Routing */}
          <Route path='/NewProduct' >
            <Route index element={<NewProduct />} />
            <Route path=':id' element={<Product />} />
            <Route path='demoProd' element={<DemoProduct />} />
          </Route>

        </Routes>

      </Router>
      {/* <WeatherMain/> */}
      {/* <Movie/> */}
      {/* <MovieDemo/> */}

      {/* <Movie1/> */}
      {/* <ShoppingListLocalStorage/> */}
      {/* <ShoppingList/>  */}
      {/* <Map/> */}
      {/* <div className='header'>
        <h1 id='title'>   React JS - The Java Script  Library</h1>
      </div> */}
      {/* <LoginControl/>
      <Greeting isLoggedIn="Bhadri"/>
      <UserCard/> 
      <HeaderBar/>
      <Footer/>
      <State />
      <StyleObj/>
      <UseState/>  */}
      <br />
      {/* <TodoList/> */}


      {/* <Event/> */}
      {/* <List /> */}
      {/* <DateComp/> */}

      {/* <DateFnsComp/>
      <NameChange/>
      <TodoListMain/>


<DemoPage/> */}


    </>

  );
}

export default App;
