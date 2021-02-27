import { Allow, IsString } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";
import { MindfulContentFunctionType } from "./mindful-content-function-type";

export class GetContentFilter {
    @Allow()
    id?: string;
    @Allow()
    mindfulAspect?: MindfulAspects;
    @Allow()
    mindfulContentFunctionType?: MindfulContentFunctionType;
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
 
}