
import { Fragment} from 'react';

const Listado = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const sports = ['soccer','Basket','tennis','baseball']

    return (
        <Fragment>
            <h2>Deportes Favoritos</h2>
            <ul>
                {
                    sports.map((sport, index) =>
                        <li key={index}>{sport}</li>
                    )
                }
            </ul>
        </Fragment>

    )
}

export default Listado