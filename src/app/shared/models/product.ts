

export interface Iproduct{
    prodName: string;
    prodDescription: string;
    prodCatg: IprodCat;
}

export type IprodCat = 'product' | 'catlog';
