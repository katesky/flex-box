export interface RemCategory {
    name: string;
    remComponents: RemComponentMC[];
}

export interface RemComponentMC {
    id: number;
    recordId: string;
    elementNumber: number;
    name: string;
}