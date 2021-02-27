import { CreateContentDto } from "./create-content.dto";

export class Content extends CreateContentDto {
  id: string;
  dateCreated: number;
  isApproved: boolean;
}
