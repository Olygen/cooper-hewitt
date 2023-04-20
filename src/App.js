import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchForm from "./components/SearchForm";
import Posters from './pages/Posters';
import PosterDetails from './pages/PosterDetails';
import SearchResults from "./pages/SearchResults";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  //State to hold poster data. Same as in PosterDetail
  const [poster, setPoster] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  //Function to getPoster
  const getPoster = async (searchTerm) => {
    try {
      if (!searchTerm) {
        setPoster(null);
        return;
      }
    //making fetch request and storing response. The search.objects method is used - same method with another query is used in Posters.js
    const response = await fetch(
      `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${apiKey}&query=${searchTerm}`
    );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // set the poster state
      setPoster(data);
      setSearchResults(data.objects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPoster('Mucha');
  }, []);

   return (
    <div className="App">
      <SearchForm postersearch={getPoster} />
      
      <BrowserRouter>   
        <Navbar postersearch={getPoster}/> 
        <Routes>
          <Route path='/' element={<Posters />}/>

          {/* The :id of the poster will be the Param of the URL, a variable in the url. Need to access by using the useParams hook in PosterDetails page. If used in App.js useParam is not needed */}
          <Route path="/details/:id" element={< PosterDetails />}/>  

          <Route path="/search" element={poster && <SearchResults poster={poster.objects} />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

