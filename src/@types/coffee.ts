export type ICoffee = {
    id: string,
    title: string,
    tags: string[],
    description: string,
    srcImg: string,
    price: string,
    amount: number,
}

export interface OrderCoffee {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    paymentMethod: string;
}