import { IsString } from "class-validator";
import { CreateContentDto } from "./create-content.dto";

export class UpdateContentDto extends CreateContentDto {
    @IsString()
    id: string;
}