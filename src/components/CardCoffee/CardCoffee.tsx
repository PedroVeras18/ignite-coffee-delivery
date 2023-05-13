import React, { useState } from 'react'
import './CardCoffee.css'

import { ICoffee } from "../../@types/coffee"

type ICardCoffeeProps = {
    data: ICoffee
}

export default function CardCoffee({ data }: ICardCoffeeProps) {
    const [countQuantity, setCountQuantity] = useState<number>(0)

    return(
        <div className='containerCardCoffee'>
            <div className="imageCardCoffee">
                <img src={data.srcImg} alt="" />
            </div>
            <div className="tagsCardCoffee">
                {data.tags.map((tag) => (
                    <p>{tag}</p>
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
                <div className="countCardCoffee">
                    <p>- 1 +</p>
                </div>
            </div>
        </div>
    )
}