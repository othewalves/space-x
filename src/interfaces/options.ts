
export interface Options {
    links: Links;
    flight_number: number;
    name: string;
    date_local: Date;
    id: string;
}

export interface Links {
    patch: Patch;
}

export interface Patch {
    small: null;
    large: null;
}
