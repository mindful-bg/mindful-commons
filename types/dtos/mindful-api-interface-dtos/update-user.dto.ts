import { Allow } from "class-validator";

export class UserUpdateDto {
    @Allow()
    firstName: string;

    @Allow()
    lastName: string;

    @Allow()
    contactEmail?: string;

    @Allow()
    birthDate?: number;

}