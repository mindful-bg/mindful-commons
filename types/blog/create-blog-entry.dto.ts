import { Allow, IsOptional, IsString } from "class-validator";
import { CreateContentDto } from "../content";

export class CreateBlogEntryDto extends CreateContentDto {
    @IsOptional()
    @IsString()
    categoryId?: string;
}