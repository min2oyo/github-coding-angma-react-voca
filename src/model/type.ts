export interface Iday {
  id: number;
  day: number;
}

export interface Iword {
  id: number;
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
}

export interface Iprops {
  word: Iword;
}