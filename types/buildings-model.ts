export type BuildingsModel = {
  id: string;
  name: string;
  city: string;
  country: string;
  createdAt: Date;
};

export interface BuildingsCellActionProps {
  data: BuildingsModel;
}

export type BuildingsModels = {
  buildings: BuildingsModel[] | [];
};
