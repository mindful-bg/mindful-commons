import { CreateContentDto } from "../content";

export class CreateBlogEntryDto extends CreateContentDto {
    categoryId?: string;
}