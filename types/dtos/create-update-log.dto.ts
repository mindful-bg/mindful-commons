export class CreateUpdateLogDto {
    id: string;
    route?: string;
    timestamp?: number;
    entityId?: string;
    info?: string;
    userEmail?: string;
    serviceIdentificator?: string;
    codeIdentificator?: string;
    isError?: boolean;
    isWarn?:boolean;
}