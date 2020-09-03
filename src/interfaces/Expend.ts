export default interface Expend {
    id: number;
    name: string;
    category: string;
    date?: string;
    done?: boolean;
    price: number;
    thumbnail_url: string;
    formattedPrice: string;
}

export interface ExpendFormat extends Array<Expend> {}
