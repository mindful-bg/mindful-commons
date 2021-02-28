import { Allow, IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";
import { ContentType } from "./content-type.enum";
import { MindfulAspects } from "./mindful-aspects.enum";
import { MindfulContentFunctionType } from "./mindful-content-function-type";


export class CreateContentDto {

    @IsUUID()
    creatorId: string;

    @IsString({message: "$property$Заглавието е задължително"})
    @MinLength(8, {message: "$property$Заглавието трябва да е от поне 8 символа"})
    @MaxLength(40, {message: "$property$Заглавието трябва да е от максимум 40 символа"})
    title: string;

    @IsString({message: "$property$Липсва съдържание"})
    body: string;

    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "$property$Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(45, {message: "$property$Слъг-а трябва да е от максимум $constraint1 символа. Сега дължината е: $value"})
    slug: string;

    @IsString()
    @MinLength(80, {message: "$property$Извадката трябва да е от поне $constraint1 символа. Сега дължината е: $value"})
    @MaxLength(140, {message: "$property$Извадката трябва да е максимум $constraint1 символа. Сега дължината е: $value"})
    digest: string;

    @IsEnum(ContentType)
    type: ContentType;

    @IsEnum(MindfulAspects, {message: "$property$Аспект на съзнанието е задължително поле."})
    mindfulAspect?: MindfulAspects;

    @IsEnum(MindfulContentFunctionType, {message: "$property$Функция е задължително поле."})
    mindfulContentFunctionType?: MindfulContentFunctionType;

    // If featured image is present, video is not featured. 
    // If video is present, but no feature image is present, video is featured 
    @IsOptional()
    @IsUUID(4, {message: "$property$Нещо се случи при избора на заглавна снимка. Моля опитайте отново или се свържете с администратор."})
    featuredImageUUID?: string;

    @IsOptional()
    @IsNumber({}, {message: "$property$Вимео ИД трябва да е число."})
    vimeoVideoId?:number;

    @IsOptional()
    @IsUUID(4, {message: "$property$Нещо се случи с аудио файла. Моля опитайте отново или се свържете с администратор."})
    audioFileUUID?: string;

    @IsOptional()
    @IsArray({message:  "$property$Нещо се случи с таговете. Моля опитайте отново или се свържете с администратор."})
    tags?: string[];
}