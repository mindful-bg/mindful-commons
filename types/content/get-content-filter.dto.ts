import { Allow } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";

export class GetContentFilter {
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
    @Allow()
    creatorId?: string;
    @Allow()
    limit?: number;
    @Allow()
    skip?: number;
}