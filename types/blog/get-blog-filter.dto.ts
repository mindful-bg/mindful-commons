import { Allow, IsString } from "class-validator";
import { GetContentFilter } from "../content";

export class GetBlogFilter extends GetContentFilter {
    @Allow()
    limit?: number;
    @Allow()
    skip?: number;
    @Allow()
    categorySlug: string;
}