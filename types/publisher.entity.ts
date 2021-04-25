import { User } from "./user.entity";

export class Publisher extends User {
    communityPictureUUID: string;
    shortName: string;
    slug: string;
    quote?: string;
    personalStoryContentId: string;
    profileVisible: boolean;
    title?: string;
}