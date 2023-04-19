import {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchform from "./components/Searchform";
import Posters from './pages/Posters';
import PosterDetails from './pages/PosterDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Searchform />
        <Routes>
          <Route path='/' element={<Posters />}/>
          {/* The :id of the poster will be the Param of the URL, a variable in the url. Need to access by using the useParams hook */}
          <Route path="/details/:id" element={< PosterDetails/>}/>   
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

