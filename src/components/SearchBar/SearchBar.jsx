import {useState} from 'react';


//export default 


function SearchBar({onSearch}) { // porps es un objeto por lo que puedo hacer destructing
  const [character, setCharacter] = useState('') // este es el dato inicial, un string vacio

 
  const handleChange = (event) => { // recibe por paramento el event cuando pasa onChange
     setCharacter(event.target.value) // la funcion se encarga de modificar con lo que pide el usuario a mi character, aca no me hago una copia
  }

  const handleReset = ()=>{
   setCharacter('');
  }

   return (
      <div>
      <input type='search' value={character} onChange={handleChange} />
      <button onClick={() => {
         onSearch(character) 
         handleReset()}}
         >Agregar</button> 
      </div>
   ); // para pasar paramentro a una funcion dentro de un onChange u onClick lo realizo con una cb

}
export default SearchBar;
