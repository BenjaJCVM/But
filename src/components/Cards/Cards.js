import Card from "../Card/Card";
import image1 from '../assets/remera1.jpeg';
import image2 from '../assets/remera2.jpeg';
import image3 from '../assets/remera3.jpeg';
import image4 from '../assets/remera4.jpeg';
import image5 from '../assets/remera5.jpeg';

const cartas = [
    {
        id:1,
        title:'Remera negra',
        image: image1,
        precio: '$6.599',
        stock:10
    },
    {
        id:2,
        title:'Remera blanca',
        image: image2,
        precio: '$6.599',
        stock:2
    },
    {
        id:3,
        title:'Remera negra',
        image: image3,
        precio: '$5.000',
        stock:5
    },
    {
        id:4,
        title:'Remera negra',
        image: image4,
        precio: '$5.999',
        stock:3
    },
    {
        id:5,
        title:'Remera negra',
        image: image5,
        precio: '$6.999',
        stock:4
    }
]
const Cards = () => {
    return(
        <div className="contenedorCards">
            {
                cartas.map((card) => (
                    <div className="cCard" key={card.id}>
                        <Card imagen={card.image} titulo={card.title} precio={card.precio} stock={card.stock}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Cards;