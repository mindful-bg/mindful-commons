import { Allow, IsEmail, IsString, Length, Matches } from 'class-validator';

export class UserAuth {
    @Allow()
    id?: string;
    @IsEmail()
    @Length(5, 50)
    public email?: string;
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    public password?: string;
    
}