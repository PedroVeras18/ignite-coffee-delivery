import { useState } from "react"
import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { ICoffee } from "../../@types/coffee"

type ICardCartProps = {
    coffee: ICoffee
}

export default function CardCart({ coffee }: ICardCartProps){
    const [countQuantity, setCountQuantity] = useState<number>(0)

    function handleCount(action: 'inc' | 'dec') { 
        if (action === 'inc' && countQuantity < 9) {
            setCountQuantity((prev) => prev + 1)
        } else if (action === 'dec' && countQuantity > 0) {
            setCountQuantity((prev) => prev - 1)
        }
    }

    return(
        <div className="ContainerCardCart">
            <div className="ImageCardCart">
                <img src={coffee.srcImg} alt="Imagem do Café" width={'70px'} />
            </div>
            <div className="DescriActionsCardCart">
                <p>{coffee.title}</p>
                <div className="ActionsCardCart">
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

                    <div className="removeCardCart">
                        <Trash size={16} color="#8047F8"/>
                        <p>REMOVER</p>
                    </div>
                </div>
            </div>
            <div className="PriceCardCart">
                <p>R$ {coffee.price}</p>
            </div>
        </div>
    )
}