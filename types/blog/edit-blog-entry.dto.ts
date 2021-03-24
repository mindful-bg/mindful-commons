import { IsOptional, IsString } from "class-validator";
import { UpdateContentDto } from "../content";

export class EditBlogEntryDto extends UpdateContentDto {
    @IsOptional()
    @IsString()
    categoryId?: string;
}