import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useEffect } from 'react';
import style from "./Card.module.css";


//export default 
function Card({ name, gender, onClose, species, image, id }) { // hago destructurn de las propiedades
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const[isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{ 
         setIsFav(true);
         dispatch(addFavorite({name, gender, onClose, species, image, id}))
      }
   } 
   
   useEffect(()=> {
      myFavorites.forEach((fav)=> {
         if(fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavorites]);
   
   return (
      <div className={style.components}>
         {
          isFav ? (
      <button onClick={handleFavorite}>❤️</button>
        ) : (
      <button onClick={handleFavorite}>🤍</button>
        )
      }

         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
           <h2>{name}</h2>
         </Link>
         <h3>Specie: {species}</h3>
         <h4>Gender: {gender}</h4>
         <img  src={image} alt={name} style={{ borderRadius: '9999999999999999rem'}} />
      </div>
   );
}

export default Card;

//alt se coloca por si la imagen no carga aparece el nombre por default