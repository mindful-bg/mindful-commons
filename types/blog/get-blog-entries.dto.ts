export class GetBlogEntriesDto {
    id: string;
    dateCreated: number;
    category?: {
        name: string;
        id: string;
    }
    creatorId: string;
    title: string;
    body: string;
    isDraft: boolean;
    isPublished: boolean;
    isApproved: boolean;
    featuredImage?: string;
    featuredVideo?: string;
    mindfulAspect?: string;
    videoLink?: string;
    tags?: string[];
}