import { IsUUID } from "class-validator";
import { CreateBlogEntryDto } from "./create-blog-entry.dto";

export class EditBlogEntry extends CreateBlogEntryDto {
    @IsUUID()
    id: string;
}