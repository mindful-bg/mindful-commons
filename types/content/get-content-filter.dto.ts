import { Allow, IsString } from "class-validator";
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
    types?: ContentType[];
    @Allow()
    creatorId?: string;
    @Allow()
    hasVideo?: boolean;
    @Allow()
    seriesId?: string | null;
    @Allow()
    hasAudio?: boolean;
    @Allow()
    skip?: number;
    @Allow()
    limit?: number;
}