import { IsString, Matches, MaxLength } from "class-validator";

export class RenameCategoryDto {
    @IsString()
    id: string;
    @IsString()
    newName: string;
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {message: "Невалиден формат на слъг-а. Използвайте латински букви, числа и тирета(-)."})
    @MaxLength(45, {message: "Слъг-а трябва да е от максимум $constraint1 символа."})
    newSlug: string;
}