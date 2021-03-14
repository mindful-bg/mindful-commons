import { Expose } from "class-transformer";
import { GetContentDto } from "../../content";

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
    slug: string;
    @Expose()
    personalStory: GetContentDto;
}