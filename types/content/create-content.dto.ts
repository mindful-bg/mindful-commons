import { Allow, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUUID, Length, Matches, MaxLength, MinLength, ValidateIf } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";

export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString({message: "Заглавието е задължително"})
    @MinLength(5, {message: "Заглавието трябва да е от поне 8 символа"})
    @MaxLength(40, {message: "Заглавието трябва да е от максимум 40 символа"})
    title: string;

    @IsString({message: "Липсва съдържание"})
    body: string;

    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(67, {message: "Слъг-а трябва да е от максимум $constraint1 символа."})
    slug: string;

    @IsOptional()
    @MinLength(30, {message: "Извадката трябва да е от поне $constraint1 символа."})
    @MaxLength(80, {message: "Извадката трябва да е максимум $constraint1 символа."})
    digest?: string | null;

    @IsEnum(ContentType)
    type: ContentType;

    @IsEnum(MindfulAspects, {message: "Аспект на съзнанието е задължително поле."})
    mindfulAspect: MindfulAspects;

    // If featured image is present, video is not featured. 
    // If video is present, but no feature image is present, video is featured 
    @IsString({message: "Водеща снимка е задължително поле."})
    featuredImageFileName?: string;

    @IsOptional() 
    @IsNumber({}, {message: "Вимео ИД трябва да е число."})
    vimeoVideoId?:number;

    @IsOptional()
    @IsString({message: "Нещо се случи с аудио файла. Моля опитайте отново или се свържете с администратор."})
    audioFileName?: string;

    @IsOptional()
    @ValidateIf(o => !o.seriesId)
    @ArrayMinSize(4, { message: "Нужно е да добавите поне 4 тага." })
    @IsArray({message:  "Нещо се случи с таговете. Моля опитайте отново или се свържете с администратор."})
    tags?: string[];

    @IsString()
    @IsOptional()
    seriesId?: string;
}