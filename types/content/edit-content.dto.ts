import { IsUUID } from "class-validator";
import { CreateContentDto } from "./create-content.dto";

export class EditContentDto extends CreateContentDto {
    @IsUUID()
    id: string;
}