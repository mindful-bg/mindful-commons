import { Expose } from "class-transformer";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";
import { MindfulContentFunctionType } from "./mindful-content-function-type";



export class GetContentDto {
    @Expose()
    id: string;
    @Expose()
    dateCreated: number;
    @Expose()
    creatorId: string;
    @Expose()
    title: string;
    @Expose()
    body?: string;
    @Expose()
    slug: string;
    @Expose()
    digest: string;
    @Expose()
    type: ContentType;
    @Expose()
    mindfulAspect: MindfulAspects;
    @Expose()
    mindfulContentFunctionType: MindfulContentFunctionType;
    @Expose()
    featuredImageFileName: string;
    @Expose()
    vimeoVideoId?:number;
    @Expose()
    audioFileName?: string;
    @Expose()
    tags?: string[];
    @Expose()
    isPublished?: boolean
}