import { IsUUID, IsIn } from "class-validator";
import { UserRoles } from "../../roles.enum";


export class ChangeRolesDto {
    @IsUUID()
    id: string;

    @IsIn(["Publisher", "User"], {each: true})
    roles: UserRoles[];
}
