import { Allow } from "class-validator";
import { GetContentFilter } from "../content";

export class GetBlogFilter extends GetContentFilter {

    categoryId: string;
}