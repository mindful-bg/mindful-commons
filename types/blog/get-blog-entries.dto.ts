import { Content } from "../content";

export class GetBlogEntriesDto {
    id: string;
    category?: {
        name: string;
        id: string;
    }
    content: Content
}