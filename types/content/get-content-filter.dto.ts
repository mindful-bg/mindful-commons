import { ContentType } from "./content-type.enum";

export interface GetContentFilter {
    id?: string;
    dateCreated?: number;
    tags?: string[];
    isDraft?: boolean;
    isPublished?: boolean;
    type?: ContentType;
    creatorId?: string;
    limit?: number;
    skip?: number;
}