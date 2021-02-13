import { MaxLength, Allow } from "class-validator";

export class UserUpdateDto {
    @Allow()
    @MaxLength(100)
    firstName: string;

    @Allow()
    @MaxLength(100)
    lastName: string;

    @Allow()
    @MaxLength(100)
    contactEmail?: string;
    
    @Allow()
    @MaxLength(30)
    birthDate?: string;

    @Allow()
    @MaxLength(50)
    location?: string;

    @Allow()
    @MaxLength(20)
    shortName?: string;
}