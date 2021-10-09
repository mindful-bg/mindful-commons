import { CreateContentDto } from "./create-content.dto";

export class Content extends CreateContentDto {
  id: string;
  dateCreated: number;
  datePublished?: number;
  isApproved: boolean;
  isPublished: boolean;
}
