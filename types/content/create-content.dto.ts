import { Allow, IsBoolean, IsEnum, IsString, IsUUID, Matches } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";
import { MindfulContentFunctionType } from "./mindful-content-function-type";


export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString()
    title: string;

    @IsString()
    body: string;

    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    slug: string;

    @IsString()
    digest: string;

    @IsEnum(ContentType)
    type: ContentType;

    @IsEnum(MindfulAspects)
    mindfulAspect?: string;

    @IsEnum(MindfulContentFunctionType)
    mindfulContentFunctionType?: string;

    @IsBoolean()
    isDraft: boolean;

    @IsBoolean()
    isPublished: boolean;

    @IsBoolean()
    isApproved: boolean;

    // If featured image is present, video is not featured. 
    // If video is present, but no feature image is present, video is featured 
    @Allow()
    featuredImageUUID?: string;

    @Allow()
    vimeoVideoId?:string;

    @Allow()
    audioFileUUID?: string;

    @Allow()
    tags?: string[];
}