import pizzaM from '../immagini/pizzaM.jpg';
function Card(){
    return(
        <div className="col">
            <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                <img src={pizzaM} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className='card-title'>Pizza Margherita</h5>
                    <p className="card-text">5.99€</p>
                    <a href='#' className='btn btn-primary'>Elimina</a>
                </div>
                </div>
        </div>
    )
}
export default Card;