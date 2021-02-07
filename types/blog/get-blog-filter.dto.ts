import { Allow, IsString } from "class-validator";
import { ContentType, GetContentFilter } from "../content";
import { MindfulAspects } from "../content/mindful-aspects.enum";

export class GetBlogFilter extends GetContentFilter {

    @Allow()
    categoryId: string;
    @Allow()
    id?: string;
    @Allow()
    mindfulAspect?: MindfulAspects;
    @Allow()
    dateCreated?: number;
    @Allow()
    tags?: string[];
    @Allow()
    isDraft?: boolean;
    @Allow()
    isPublished?: boolean;
    @Allow()
    type?: ContentType;
    @IsString()
    creatorId?: string;
    @Allow()
    limit?: number;
    @Allow()
    skip?: number;
}