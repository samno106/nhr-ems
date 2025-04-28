
export type BuildingModel={
    id: string
    name: string
    city:string
    country:string
    createdAt:Date
}

export type BuildingModels={
    buildings:BuildingModel[] | []
}

export interface BuildingCellActionProps{
    data:BuildingModel;
}