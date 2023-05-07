import './NavHome.css'

import LogoNavbarHome from '../../../../assets/logo-ignite-coffee.png'

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export default function NavHome() {
    return (
        <div className="containerNavHome">
            <div className="navHome">
                <div className="logoNavHome">
                    <img src={LogoNavbarHome} alt="" />
                </div>

                <div className="loc-comprar">
                    <button className='buttonLocNavbar'>
                        <MapPin size={20} color="#8047F8" weight="fill" />
                        <p>Anápolis, GO</p>
                    </button>
                    <button className='buttonBuyNavbar'>
                        <ShoppingCart size={24} color="#C47F17" weight="fill" />
                    </button>
                </div>
            </div>
        </div>
    )
}