import { UserRoles } from "./roles.enum";

export class User {
    id?: string;
    facebookId?: string;
    email?: string;
    roles?: UserRoles[];
    firstName?: string;
    lastName?: string;
    emailVerified?: boolean;
    profilePicture?: string;
    shortName?: string;
    userStoryContentId?: string;
}
