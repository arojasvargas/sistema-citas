import { BarberosInterface } from './barberos.interface';
export interface BarberosResponse {
    page: number;
    results: BarberosInterface[];
    total_pages: number;
    total_results: number;
}
