import { CitasInterface } from "./citas.interface";

export interface CitasResponse {
    page: number;
    results: CitasInterface[];
    total_pages: number;
    total_results: number;
}
