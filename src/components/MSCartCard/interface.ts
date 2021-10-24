export type ItemCartCard = {
    id: number;
    product_id: string;
    product_quantity: number;
    name: string;
    price: string;
    image: string;
    stock: number;
};

export interface ICardProps {
    item: ItemCartCard;
    reload: () => void;
}
