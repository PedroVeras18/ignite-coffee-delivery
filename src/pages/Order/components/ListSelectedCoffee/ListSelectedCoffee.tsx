import React from "react"
import './ListSelectedCoffee.css'
import CardCart from "../../../../components/CardCoffee/CardCart"

import COFFEES from "../../../../coffees"

export default function ListSelectedCoffee() {
    return (
        <div className="ContainerListSelectedCoffee">
            <div className="ListSelectedCoffee">
                <h3>Cafés selecionados</h3>

                <div className="BoxListSelectedCoffee">
                    {COFFEES.map((coffee) => (
                        <CardCart
                            key={coffee.id}
                            coffee={coffee}
                        />
                    ))}

                    <div className="TotalPriceListSelectedCoffee">
                        <div className="TotalItens">
                            <p>Total de itens</p>
                            <p>R$ 29,70</p>
                        </div>
                        <div className="Delivery">
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </div>
                        <div className="TotalItensDelivery">
                            <h3>Total</h3>
                            <h3>R$ 33,20</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}