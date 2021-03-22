import { User } from "./user.entity";

export class Publisher extends User {
    communityPicture?: string;
    shortName?: string;
    slug: string;
    shortDescription?: string;
    personalStoryContentId?: string;
    profileVisible?: boolean;
}