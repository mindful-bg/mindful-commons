import { Expose } from "class-transformer";

export class GetPublishersDto {
    @Expose()
    id?: string;
    @Expose()
    firstName?: string;
    @Expose()
    lastName?: string;
    @Expose()
    shortName?: string;
    @Expose()
    slug?: string;
    @Expose()
    personalStoryContentId?: string;
}