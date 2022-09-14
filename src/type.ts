export type productType =  {
    id: number;
    title: string;
    description: string;
    price: number;
};

export type productsProps = {
    products:productType[];
};
export type productProps = {
    product:productType;
};