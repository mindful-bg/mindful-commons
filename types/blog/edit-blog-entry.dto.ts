import { IsUUID } from "class-validator";
import { CreateBlogEntryDto } from "./create-blog-entry.dto";

export class EditBlogEntryDto extends CreateBlogEntryDto {
    @IsUUID()
    id: string;
}