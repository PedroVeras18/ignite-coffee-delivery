import './Home.css'

import NavHome from "./components/NavHome/NavHome";
import DescriptionHome from './components/DescriptionHome/DescriptionHome';

export default function Home() {
    return (
        <div className="containerHome">
            <NavHome />

            <DescriptionHome />
        </div>
    )
}