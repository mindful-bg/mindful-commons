import { Allow, IsString } from "class-validator";
import { GetContentFilter } from "../content";

export class GetBlogFilter extends GetContentFilter {
    @Allow()
    categorySlug: string;
}