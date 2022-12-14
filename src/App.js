import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
// import Comment from "./components/Comment";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AllCountries from "./components/AllCountries";
import About from "./components/About";

const URL='https://restcountries.com/v3.1/all'



// const url='http://localhost:4000/foods'
const RestContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
`;
const Nav = styled.div`
  display: flex;
`;


//fetching from Api
function App() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((country) => {
        setContinents(country);
      });
  },[]);
 
  // console.log(fooder)

  return (
    <RestContainer>
      <Header className="header">
        <AppName>Continent Countries App </AppName>
        <Nav>
          <NavBar />
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcountries" element={<AllCountries continents={continents}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </RestContainer>
  );
}

export default App;