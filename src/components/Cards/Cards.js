import Card from "../Card/Card";
import image1 from '../assets/remera1.jpeg';
import image2 from '../assets/remera2.jpeg';
import image3 from '../assets/remera3.jpeg';
import image4 from '../assets/remera4.jpeg';
import image5 from '../assets/remera5.jpeg';

const cartas = [
    {
        id:1,
        title:'Remera',
        image: image1,
        precio: '$11.999'
    },
    {
        id:2,
        title:'Remera',
        image: image2,
        precio: '$11.999'
    },
    {
        id:3,
        title:'Remera',
        image: image3,
        precio: '$11.999'
    },
    {
        id:4,
        title:'Remera',
        image: image4,
        precio: '$11.999'
    },
    {
        id:5,
        title:'Remera',
        image: image5,
        precio: '$11.999'
    }
]
const Cards = () => {
    return(
        <div className="contenedorCards">
            {
                cartas.map((card) => (
                    <div className="cCard" key={card.id}>
                        <Card imagen={card.image} titulo={card.title} precio={card.precio}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Cards;