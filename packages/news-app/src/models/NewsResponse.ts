export interface NewsResponse<T> {
    ok: boolean;
    status: string,
    totalResults: number,
    articles: T[]
}
