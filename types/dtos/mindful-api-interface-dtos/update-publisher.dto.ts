import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UpdatePublisherDto {
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(20, {message: "Слъг-а трябва да е от максимум $constraint1 символа."})
    @MinLength(3, {message: "Слъг-а трябва да е от минимум $constraint1 символа."})
    slug: string;

    @MaxLength(30)
    @IsOptional()
    title?: string;

    @MaxLength(150)
    @IsOptional()
    quote?: string;

    @MaxLength(20, {message: "Краткото име трябва да е от максимум $constraint1 символа."})
    @MinLength(3, {message: "Краткото име трябва да е от минимум $constraint1 символа."})
    @IsString()
    shortName?: string;

    @IsOptional()
    profileVisible?: boolean;
}