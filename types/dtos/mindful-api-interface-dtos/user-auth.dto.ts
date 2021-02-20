import { Allow, IsEmail, IsString, Length, Matches } from 'class-validator';
import { MindfulRegex } from '../../../constants/regex';

export class UserAuth {
    @Allow()
    id?: string;
    @IsEmail()
    @Length(5, 50)
    public email?: string;
    @IsString()
    @Matches(MindfulRegex.password.regex, {message: MindfulRegex.password.errorMessage})
    public password?: string;
    
}