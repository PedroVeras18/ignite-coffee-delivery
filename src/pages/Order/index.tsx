import './Order.css'

import Navbar from '../../components/NavbarApp/Navbar'
import CompleteOrder from "./components/CompleteOrder/CompleteOrder"
import ListSelectedCoffee from "./components/ListSelectedCoffee/ListSelectedCoffee"

export default function Order(){
    return(
        <div className='ContainerOrder'>
            <Navbar />

            <div className="BoxOrder">
                <CompleteOrder />
                <ListSelectedCoffee />
            </div>
        </div>
    )
}