import { BlogEntry } from "./blog-entry.entity";

export class Blog {
  userId: string;
  possibleCategories: {
    name: string;
    id: string;
  }[]; 
  entries: BlogEntry[];
  userStoryContentId: string;
  userNeedsApprovalToPost: boolean;
}
