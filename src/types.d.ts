export interface Country {
    alpha3Code: string;
    name: string;
    capital: string;
    population: number;
    region: string;
    borders: string[];
    flags: {
        svg: string;
    };
}