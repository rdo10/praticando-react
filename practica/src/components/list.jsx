
import { Fragment} from 'react';

const Listado = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    return (
        <Fragment>
            <ul>
                {
                    numbers.map((number, index) =>
                        <li key={index}>{number}</li>
                    )
                }
            </ul>
        </Fragment>

    )
}

export default Listado