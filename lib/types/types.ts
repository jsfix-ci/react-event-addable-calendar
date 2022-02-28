export enum CalendarEventType {
  PERSONAL = 'PERSONAL',
  COUPLE = 'COUPLE', // todo 네이밍 리팩토링 필요
  HOLIDAY = 'HOLIDAY'
}

export interface CalendarEventData {
  id?: number
  type: CalendarEventType;
  name: string;
  time: Array<string> | null; // 공휴일이면 null
  memo: string | null; // memo는 optional
}

export enum Language {
  en = 'EN',
  ko = 'KO'
}

export interface CalendarConfig {
  lang?: Language;
}