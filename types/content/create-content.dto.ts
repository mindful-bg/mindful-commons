import { Allow, IsBoolean, IsEnum, IsString, IsUUID, Matches } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";


export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString()
    title: string;

    @IsString()
    body: string;

    @Matches(`/^
        [a-z0-9]+   # One or more repetition of given characters
        (?:         # A non-capture group.
          -           # A hyphen
          [a-z0-9]+   # One or more repetition of given characters
        )*          # Zero or more repetition of previous group
       $/`)
    slug: string;

    @IsString()
    digest: string;

    @IsEnum(ContentType)
    type: ContentType;

    @IsBoolean()
    isDraft: boolean;

    @IsBoolean()
    isPublished: boolean;

    @IsBoolean()
    isApproved: boolean;

    @Allow()
    featuredImage?: string;

    @Allow()
    featuredVideo?: string;

    @IsEnum(MindfulAspects)
    mindfulAspect?: string;

    @Allow()
    videoLink?:string;

    @Allow()
    tags?: string[];
}