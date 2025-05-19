export type FloorModel = {
  id: string;
  name: string;
  building: string;
  floorNumber: number;
  description?: string;
  createdAt: Date;
};

export interface FloorCellActionProps {
  data: FloorModel;
}

export type FloorModels = {
  buildings: FloorModel[] | [];
};
