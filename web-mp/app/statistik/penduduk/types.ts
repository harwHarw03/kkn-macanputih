type AgeDistribution = {
  "0_4": number;
  "5_9": number;
  "10_14": number;
  "15_19": number;
  "20_24": number;
  "25_29": number;
  "30_34": number;
  "35_39": number;
  "40_44": number;
  "45_49": number;
  "50_54": number;
  "55_59": number;
  "60_64": number;
  "65_69": number;
  "70_74": number;
  "75+": number;
};

type GenderData = {
  total: number;
  age: AgeDistribution;
};

type PopulationData = {
  total: number;
  married: number;
  unmarried: number;
  divorced_live: number;
  divorced_dead: number;
  wni: number;
  wna: number;
  not_nik: number;
  not_kk: number;
  last_update: string;
  men: GenderData;
  women: GenderData;
};
