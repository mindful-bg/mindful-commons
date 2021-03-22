import { UserRoles } from "./roles.enum";

export class User {
    id?: string;
    facebookId?: string;
    email?: string;
    roles?: UserRoles[];
    birthDate?: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    emailVerified?: boolean;
}
