export interface CreateUpdateLogDto {
    id: string;
    route: string;
    entityId?: string;
    info?: string;
    dateUtcTimestamp?: number;
    userId?: string;
    serviceIdentificator?: string;
    codeIdentificator?: string;
    isError?: boolean;
}