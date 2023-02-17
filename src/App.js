import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';


// envio las propiedades del objeto Rick, viene del archivo data.js
// cuando import character (es un array con 3 objetod)me traigo lo que esta por default, 
//si quiero traer algo mas lo hago con destructuring {Rick}
function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const[characters, setCharacters] = useState([]);
 const [access, setAccess] = useState(false);
  
  const username = 'sofiacostamagna45@gmail.com';
  const password = '123abc';

const login = (userData) => {
  if(userData.username === username && userData.password === password){
    setAccess(true)
    navigate("/home");
  }
}
useEffect(()=> {
  !access && navigate('/')
}, [access])

  /*const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
     });
   }*/

   function onSearch(character) {
    fetch (`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             const alreadyExists = characters.some(char => char.id === data.id);
             if (!alreadyExists) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert(`El personaje ${data.name} ya ha sido agregado`);
             }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

   const onClose =(id) => {
     setCharacters(
      characters.filter(character => character.id !== id)
      )
   } // me quedo con todos los characters que sean distintos al id que le pase

  return (
    <div className='App' style={{ padding: '25px'}}>
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}
        <Routes>
          <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='about' element={<About/>} />
          <Route path='detail/:detailId' element={<Detail/>} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes> 
    </div>
  )
}

export default App
