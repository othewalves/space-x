export interface Trip {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: null;
    static_fire_date_unix: null;
    net: boolean;
    window: null;
    rocket: string;
    success: null;
    failures: any[];
    details: null;
    crew: any[];
    ships: any[];
    capsules: any[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string;
    id: string;
}

export interface Core {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: null;
    landing_success: null;
    landing_type: null;
    landpad: null;
}

export interface Fairings {
    reused: null;
    recovery_attempt: null;
    recovered: null;
    ships: any[];
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: null;
    webcast: string;
    youtube_id: string;
    article: null;
    wikipedia: null;
}

export interface Flickr {
    small: any[];
    original: any[];
}

export interface Patch {
    small: null;
    large: null;
}

export interface Reddit {
    campaign: null;
    launch: null;
    media: null;
    recovery: null;
}
