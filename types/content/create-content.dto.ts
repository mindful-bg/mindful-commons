import { Allow, IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";
import { MindfulContentFunctionType } from "./mindful-content-function-type";


export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString({message: "Заглавието е задължително"})
    @MinLength(8, {message: "Заглавието трябва да е от поне 8 символа"})
    @MaxLength(40, {message: "Заглавието трябва да е от максимум 40 символа"})
    title: string;

    @IsString({message: "Липсва съдържание"})
    body: string;

    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(40, {message: "Слъг-а трябва да е от максимум 45 символа"})
    slug: string;

    @IsString()
    @MinLength(80, {message: "Извадката трябва да е от поне 80 символа"})
    @MaxLength(140, {message: "Извадката трябва да е максимум 140 символа"})
    digest: string;

    @IsEnum(ContentType)
    type: ContentType;

    @IsEnum(MindfulAspects, {message: "Аспект на съзнанието е задължително поле."})
    mindfulAspect?: MindfulAspects;

    @IsEnum(MindfulContentFunctionType, {message: "Функция е задължително поле."})
    mindfulContentFunctionType?: MindfulContentFunctionType;

    // If featured image is present, video is not featured. 
    // If video is present, but no feature image is present, video is featured 
    @IsOptional()
    @IsUUID()
    featuredImageUUID?: string;

    @IsOptional()
    @IsNumber()
    vimeoVideoId?:number;

    @IsOptional()
    @IsUUID()
    audioFileUUID?: string;

    @IsOptional()
    @IsArray()
    tags?: string[];
}