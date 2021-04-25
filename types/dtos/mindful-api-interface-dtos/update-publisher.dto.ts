import { IsOptional, IsString, Matches, MaxLength } from "class-validator";

export class UpdatePublisherDto {
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(45, {message: "Слъг-а трябва да е от максимум $constraint1 символа."})
    slug: string;

    @MaxLength(30)
    @IsOptional()
    title?: string;

    @MaxLength(75)
    @IsOptional()
    quote?: string;

    @MaxLength(20)
    @IsString()
    shortName?: string;

    @IsOptional()
    profileVisible?: boolean;
}