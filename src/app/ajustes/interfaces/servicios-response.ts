import { ServiciosInterface } from "./servicios.interface";

export interface ServiciosResponse {
    page: number;
    results: ServiciosInterface[];
    total_pages: number;
    total_results: number;
}
