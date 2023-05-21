import './Home.css'

import COFFEES from '../../coffees';

import Navbar from '../../components/NavHome/Navbar';
import DescriptionHome from './components/DescriptionHome/DescriptionHome';
import CardCoffee from '../../components/CardCoffee/CardCoffee';

export default function Home() {
    return (
        <div className="containerHome">
            <Navbar />

            <DescriptionHome />

            <div className="listCoffee">
                <div className="titleListCoffee">
                    <h3>Nossos cafés</h3>
                </div>

                <div className="listCardCoffee">
                    {COFFEES.map((coffee) => (
                        <CardCoffee
                            key={coffee.id}
                            data={coffee}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}