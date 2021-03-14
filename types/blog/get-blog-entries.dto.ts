import { Content } from "../content";
import { GetContentDto } from "../content/get-content.dto";

export class GetBlogEntriesDto {
    id: string;
    category?: {
        name: string;
        id: string;
    }
    content: GetContentDto
}