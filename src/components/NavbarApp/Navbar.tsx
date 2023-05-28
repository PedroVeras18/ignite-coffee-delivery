import './Navbar.css'
import { useNavigate } from "react-router-dom";

import LogoNavbarHome from '../../assets/logo-ignite-coffee.png'

import { MapPin, ShoppingCart } from "@phosphor-icons/react";

type INavbarAppProps = {
    positionNav?: string;
}

export default function Navbar({ positionNav = 'normal' }: INavbarAppProps) {
    const navigate = useNavigate()

    function handleNavigateHome() {
        navigate('/')
    }

    function handleNavigateOrder() {
        navigate('/order')
    }

    return (
        <div
            className={
                positionNav === 'fixed'
                    ? 'containerNavHomePositionFixed'
                    : 'containerNavHomePositionFixedNormal'
            }
        >
            <div className="navHome">
                <div className="logoNavHome">
                    <img
                        src={LogoNavbarHome}
                        alt="Logotipo Coffee Delivery"
                        onClick={handleNavigateHome}
                    />
                </div>

                <div className="loc-comprar">
                    <button className='buttonLocNavbar'>
                        <MapPin size={20} color="#8047F8" weight="fill" />
                        <p>Anápolis, GO</p>
                    </button>
                    <button className='buttonBuyNavbar'>
                        <ShoppingCart
                            size={24}
                            color="#C47F17"
                            weight="fill"
                            onClick={handleNavigateOrder}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}