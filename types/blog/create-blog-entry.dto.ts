import { Allow } from "class-validator";
import { CreateContentDto } from "../content";

export class CreateBlogEntryDto extends CreateContentDto {
    @Allow()
    categoryId?: string;
}