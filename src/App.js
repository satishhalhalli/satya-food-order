import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,

  Outlet,
} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
//import Groucery from './components/Groucery';
import { Suspense, lazy } from 'react';
import store from './utils/Store';
import Cart from './components/Cart';
const Groucery=lazy(()=> import('./components/Groucery') )

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
     
     <Outlet/>
      <Footer/>

    </div>
    </Provider>
  );
}

const AppRouter=createBrowserRouter([{
  path : '/',
  element : <App/>,
  children :[
    {
      path : '/',
      element : <Body/>
    },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/Contact',
        element : <Contact/>
      },
      {
        path : '/Cart',
        element : <Cart/>
      },
      {
        path : '/Groucery',
        element :<Suspense fallback={<h1>LOADING....</h1>}> <Groucery/> </Suspense> 
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenu/>
      }
    
  ],
  errorElement : <Error/>
  
},


]
);

export default AppRouter;
