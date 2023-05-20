import { useState } from 'react'
import './CardCoffee.css'

import { ICoffee } from "../../@types/coffee"
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

type ICardCoffeeProps = {
    data: ICoffee
}

export default function CardCoffee({ data }: ICardCoffeeProps) {
    const [countQuantity, setCountQuantity] = useState<number>(0)

    function handleCount(action: 'inc' | 'dec') { 
        if (action === 'inc') {
            setCountQuantity((prev) => prev + 1)
        } else if (action === 'dec' && countQuantity > 0) {
            setCountQuantity((prev) => prev - 1)
        }
    }

    return (
        <div className='containerCardCoffee'>
            <div className="imageCardCoffee">
                <img src={data.srcImg} alt="" />
            </div>
            <div className="tagsCardCoffee">
                {data.tags.map((tag) => (
                    <p>{tag.toLocaleUpperCase()}</p>
                ))}
            </div>
            <div className="nameCardCoffee">
                <h3>{data.title}</h3>
            </div>
            <div className="descriptionCardCoffee">
                <p>{data.description}</p>
            </div>
            <div className="priceCountCardCoffee">
                <div className="priceCardCoffee">
                    <p>
                        R$
                        <strong>{data.price}</strong>
                    </p>
                </div>
                <div className="countBuyCardCoffee">
                    <div className="countCardCoffee">
                        <Minus
                            size={18}
                            color="#8047F8"
                            weight="bold"
                            onClick={() => handleCount('dec')}
                        />
                        <p>{countQuantity}</p>
                        <Plus
                            size={18}
                            color="#8047F8"
                            weight="bold"
                            onClick={() => handleCount('inc')}
                        />
                    </div>
                    <div className="buyCardCoffee">
                        <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}