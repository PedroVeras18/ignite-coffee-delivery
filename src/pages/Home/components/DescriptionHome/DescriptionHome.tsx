import './DescriptionHome.css'

import { DESCRIPTION_COFFEE } from '../../../../constants/description-coffee'

import CopoCafe from '../../../../assets/copo-cafe.png'

export default function DescriptionHome() {
    return (
        <div className="containerDescriptionCoffes">
            <div className="descriptionCoffes">
                <div className="textDescription">
                    <div className="title-subtitle-description">
                        <h3>Encontre o café perfeito <br />
                        para qualquer hora do dia</h3>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                        qualquer hora</p>
                    </div>
                    <div className="infos-coffes">
                        {DESCRIPTION_COFFEE.map((descri) => (
                            <div className="info-coffee">
                                <div className='icon-info-coffee' style={{ backgroundColor: descri.bg }}>
                                    <descri.icon color='#FFF' size={20}/>
                                </div>
                                <p>{descri.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="imageDescription">
                    <img src={CopoCafe} width='480px' />
                </div>
            </div>
        </div>
    )
}