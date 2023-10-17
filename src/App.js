import Layout from './Layout';
import './App.css';
import Home from './Components';
import AuctionsPage from './Pages/AuctionsPage';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path = "/" element = {<Layout/>} > 
      <Route index element = {<Home/>} /> 
      <Route path = "/auctions" element = {<AuctionsPage/>} /> 
    </Route>
    </Routes>
  );
}

export default App;
