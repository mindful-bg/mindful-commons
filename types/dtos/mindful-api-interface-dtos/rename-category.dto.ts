import { IsString } from "class-validator";

export class RenameCategoryDto {
    @IsString()
    id: string;
    @IsString()
    newName: string;
}