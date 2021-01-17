import { UserRoles } from "./roles.enum";

export class User {
    id?: string;
    facebookId?: string;
    email?: string;
    role?: UserRoles;
    firstName?: string;
    lastName?: string;
    emailVerified?: boolean;
}
