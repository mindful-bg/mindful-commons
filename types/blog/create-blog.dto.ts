import { CreateContentDto } from "../content";

export class CreateBlogDto extends CreateContentDto {
    category?: string;
}