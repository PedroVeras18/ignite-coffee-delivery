import { useState } from "react";
import './CompleteOrder.css';

import Input from "../../../../components/Input/Input";

import { OrderCoffee } from "../../../../@types/coffee";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";

type PaymentOption = 'credit' | 'debit' | 'money' | '';

export default function CompleteOrder() {
    const [orderCoffee, setOrderCoffee] = useState<OrderCoffee>({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        paymentMethod: '',
    });
    const [selectedOption, setSelectedOption] = useState<PaymentOption>('');

    const handleInputChange = (key: keyof OrderCoffee, value: string) => {
        setOrderCoffee((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleOptionChange = (option: PaymentOption) => {
        setSelectedOption(option);
    };

    return (
        <div className="ContainerCompleteOrder">
            <div className="CompleteOrder">
                <h3>Complete seu pedido</h3>

                <div className="BoxCompleteOrder">
                    <div className="DescriptionDeliveryAddress">
                        <MapPinLine size={23} color="#C47F17" />
                        <div className="TextDeliveryAddress">
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <div className="InputsCompleteOrder">
                        <Input
                            width="200px"
                            placeholder="CEP"
                            value={orderCoffee.cep}
                            onChange={(event) => handleInputChange('cep', event.target.value)}
                        />
                        <Input
                            width="560px"
                            placeholder="Rua"
                            value={orderCoffee.rua}
                            onChange={(event) => handleInputChange('rua', event.target.value)}
                        />

                        <div style={{ display: 'flex' }}>
                            <Input
                                width="200px"
                                placeholder="Número"
                                value={orderCoffee.numero}
                                onChange={(event) => handleInputChange('numero', event.target.value)}
                            />
                            <Input
                                width="348px"
                                placeholder="Complemento"
                                value={orderCoffee.complemento}
                                onChange={(event) => handleInputChange('complemento', event.target.value)}
                            />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <Input
                                width="200px"
                                placeholder="Bairro"
                                value={orderCoffee.bairro}
                                onChange={(event) => handleInputChange('bairro', event.target.value)}
                            />
                            <Input
                                width="276px"
                                placeholder="Cidade"
                                value={orderCoffee.cidade}
                                onChange={(event) => handleInputChange('cidade', event.target.value)}
                            />
                            <Input
                                width="60px"
                                placeholder="UF"
                                value={orderCoffee.uf}
                                onChange={(event) => handleInputChange('uf', event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="BoxCompleteOrder">
                    <div className="DescriptionDeliveryAddress">
                        <CurrencyDollar size={23} color="#8047F8" />
                        <div className="TextDeliveryAddress">
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <div className="SelectPaymentMethod">
                        <div
                            className={`ButtonCardPaymentMethod${selectedOption === 'credit' ? 'Selected' : ''}`}
                            onClick={() => handleOptionChange('credit')}
                        >
                            <CreditCard size={22} color="#8047F8" />
                            <p>CARTÃO DE CRÉDITO</p>
                        </div>
                        <div
                            className={`ButtonCardPaymentMethod${selectedOption === 'debit' ? 'Selected' : ''}`}
                            onClick={() => handleOptionChange('debit')}
                        >
                            <Bank size={22} color="#8047F8" />
                            <p>CARTÃO DE DÉBITO</p>
                        </div>
                        <div
                            className={`ButtonCardPaymentMethod${selectedOption === 'money' ? 'Selected' : ''}`}
                            onClick={() => handleOptionChange('money')}
                        >
                            <Money size={22} color="#8047F8" />
                            <p>DINHEIRO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}