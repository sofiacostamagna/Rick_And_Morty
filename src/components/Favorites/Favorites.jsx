import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";


const Favorites  = () => {
    const { myFavorites} = useSelector(state => state);// useSelecto >> Hook que funciona igual que mapStateToProps
    
    const dispatch = useDispatch();

    const handlerOrder = (event) =>{
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <div>
                <select onChange={handlerOrder} >
                    <option value='order' disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter} >
                <option value='filter' disabled='disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
                
            </div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                        <div>
                             <Link to={`/detail/${character.id}`}>
                             <h2>{character.name}</h2>
                             </Link>
                        </div>
                        <div>
                            <h3>Specie: {character.species}</h3>
                            <h4>Gender: {character.gender}</h4>
                        </div>
                        <div>
                            <img  src={character.image} alt={character.name} style={{ borderRadius: '9999999999999999rem'}} />
                        </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
export default Favorites;