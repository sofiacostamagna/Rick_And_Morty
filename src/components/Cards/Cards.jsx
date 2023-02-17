import Card from '../Card/Card';

//export default 
function Cards({ characters, onClose }) { // es un array de objetos
   //const { characters } = props;
   return (
   <div>
      {
        characters.map(({id, name, species, gender, image}) => { // es un objeto
         return <Card
           key={id} // es para react, es para uso propio y exclusivo de react, no podemos acceder
           name={name}
           species={species}
           gender={gender}
           image={image}
           id={id}
           onClose={() => onClose(id)} // recibe onClose de App y se la pasa a card
        />
        })
      }

   </div>
   )
}
export default Cards;


 