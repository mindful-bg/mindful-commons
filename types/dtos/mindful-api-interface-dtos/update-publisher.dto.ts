import { IsOptional, Matches, MaxLength } from "class-validator";

export class UpdatePublisherDto {
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(45, {message: "Слъг-а трябва да е от максимум $constraint1 символа."})
    slug: string;

    @MaxLength(30)
    @IsOptional()
    title?: string;

    @MaxLength(60)
    @IsOptional()
    shortDescription?: string;

    @MaxLength(20)
    @IsOptional()
    shortName?: string;

    @IsOptional()
    profileVisible?: boolean;
}