import { IsOptional, IsString } from "class-validator";
import { EditContentDto } from "../content/edit-content.dto";

export class EditBlogEntryDto extends EditContentDto {
    @IsOptional()
    @IsString()
    categoryId?: string;
}