export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currencies {
  EUR?: TartuGecko;
  GTQ?: TartuGecko;
  CLP?: TartuGecko;
  UYU?: TartuGecko;
  KGS?: TartuGecko;
  ZMW?: TartuGecko;
  NZD?: TartuGecko;
  GEL?: TartuGecko;
  TTD?: TartuGecko;
  KRW?: TartuGecko;
  USD?: TartuGecko;
  XOF?: TartuGecko;
  MKD?: TartuGecko;
  FJD?: TartuGecko;
  MGA?: TartuGecko;
  XCD?: TartuGecko;
  AUD?: TartuGecko;
  CRC?: TartuGecko;
  DZD?: TartuGecko;
  NIO?: TartuGecko;
  ZWL?: TartuGecko;
  RWF?: TartuGecko;
  TRY?: TartuGecko;
  TJS?: TartuGecko;
  JMD?: TartuGecko;
  GBP?: TartuGecko;
  SHP?: TartuGecko;
  AWG?: TartuGecko;
  PKR?: TartuGecko;
  BYN?: TartuGecko;
  SBD?: TartuGecko;
  SZL?: TartuGecko;
  ZAR?: TartuGecko;
  XPF?: TartuGecko;
  MXN?: TartuGecko;
  GGP?: TartuGecko;
  CHF?: TartuGecko;
  BWP?: TartuGecko;
  ILS?: TartuGecko;
  GNF?: TartuGecko;
  KPW?: TartuGecko;
  PHP?: TartuGecko;
  TND?: TartuGecko;
  XAF?: TartuGecko;
  NGN?: TartuGecko;
  JEP?: TartuGecko;
  EGP?: TartuGecko;
  JOD?: TartuGecko;
  KMF?: TartuGecko;
  LSL?: TartuGecko;
  IDR?: TartuGecko;
  CAD?: TartuGecko;
  AMD?: TartuGecko;
  FKP?: TartuGecko;
  PAB?: TartuGecko;
  LAK?: TartuGecko;
  AZN?: TartuGecko;
  KHR?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  STN?: TartuGecko;
  RSD?: TartuGecko;
  VND?: TartuGecko;
  LKR?: TartuGecko;
  MAD?: TartuGecko;
  MRU?: TartuGecko;
  QAR?: TartuGecko;
  SLL?: TartuGecko;
  ISK?: TartuGecko;
  GMD?: TartuGecko;
  GYD?: TartuGecko;
  ANG?: TartuGecko;
  SEK?: TartuGecko;
  TVD?: TartuGecko;
  AED?: TartuGecko;
  VES?: TartuGecko;
  WST?: TartuGecko;
  LBP?: TartuGecko;
  TOP?: TartuGecko;
  IMP?: TartuGecko;
  BAM?: BAM;
  HTG?: TartuGecko;
  SCR?: TartuGecko;
  TZS?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  ERN?: TartuGecko;
  ETB?: TartuGecko;
  MNT?: TartuGecko;
  NPR?: TartuGecko;
  SYP?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  SSP?: TartuGecko;
  IQD?: TartuGecko;
  ALL?: TartuGecko;
  UGX?: TartuGecko;
  BTN?: TartuGecko;
  INR?: TartuGecko;
  NAD?: TartuGecko;
  OMR?: TartuGecko;
  BDT?: TartuGecko;
  DJF?: TartuGecko;
  TWD?: TartuGecko;
  MUR?: TartuGecko;
  NOK?: TartuGecko;
  THB?: TartuGecko;
  HNL?: TartuGecko;
  PYG?: TartuGecko;
  LRD?: TartuGecko;
  SOS?: TartuGecko;
  GIP?: TartuGecko;
  BSD?: TartuGecko;
  MWK?: TartuGecko;
  SAR?: TartuGecko;
  LYD?: TartuGecko;
  BOB?: TartuGecko;
  PGK?: TartuGecko;
  BBD?: TartuGecko;
  BGN?: TartuGecko;
  SDG?: BAM;
  TMT?: TartuGecko;
  MMK?: TartuGecko;
  BRL?: TartuGecko;
  COP?: TartuGecko;
  IRR?: TartuGecko;
  MDL?: TartuGecko;
  MOP?: TartuGecko;
  CVE?: TartuGecko;
  JPY?: TartuGecko;
  BHD?: TartuGecko;
  CKD?: TartuGecko;
  MVR?: TartuGecko;
  DOP?: TartuGecko;
  CDF?: TartuGecko;
  YER?: TartuGecko;
  UAH?: TartuGecko;
  CNY?: TartuGecko;
  PEN?: TartuGecko;
  SRD?: TartuGecko;
  AFN?: TartuGecko;
  HUF?: TartuGecko;
  KWD?: TartuGecko;
  KYD?: TartuGecko;
  MYR?: TartuGecko;
  GHS?: TartuGecko;
  HRK?: TartuGecko;
  CZK?: TartuGecko;
  UZS?: TartuGecko;
  BIF?: TartuGecko;
  BZD?: TartuGecko;
  KES?: TartuGecko;
  KZT?: TartuGecko;
  ARS?: TartuGecko;
  HKD?: TartuGecko;
  RON?: TartuGecko;
  KID?: TartuGecko;
  VUV?: TartuGecko;
  AOA?: TartuGecko;
  PLN?: TartuGecko;
  MZN?: TartuGecko;
  BMD?: TartuGecko;
  RUB?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}
