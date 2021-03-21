import { BlogEntry } from "./blog-entry.entity";

export class Blog {
  userId: string;
  possibleCategories: {
    slug: string;
    name: string;
    id: string;
  }[]; 
  entries: BlogEntry[];
  userNeedsApprovalToPost: boolean;
}
