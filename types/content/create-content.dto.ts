import { Allow, IsBoolean, IsEnum, IsString, IsUUID } from "class-validator";
import { ContentType } from "./content-type.enum";


export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString()
    title: string;

    @IsString()
    body: string;

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

    @Allow()
    mindfulZone?: string;

    @Allow()
    videoLink?:string;

    @Allow()
    tags?: string[];
}