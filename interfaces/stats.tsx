export interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
