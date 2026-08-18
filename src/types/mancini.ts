export interface ArchiveImage {
  src: string;
  alt: string;
  caption: string;
}

export interface House {
  id: string;
  logo: string;
  name: string;
  since: string;
  address: string;
  phone: string;
  phoneHref: string;
  menu: string;
  description: string;
  archive: ArchiveImage[];
}

export interface ServiceStatus {
  isOpen: boolean;
  years: number;
  closingLabel: string;
  time: string;
  today: string;
}

export interface ReservationFormData {
  name: string;
  date: string;
  time: string;
  guests: number | string;
  phone: string;
  email: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface BrandAssets {
  logo: string;
  medallion: string;
  pulcinella: string;
  poster: string;
  ilLogo: string;
  pizzaLogo: string;
  gift: string;
  delivery: string;
  keeta: string;
}

export interface ScheduleItem {
  days: string;
  hours: string;
}
