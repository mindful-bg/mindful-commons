import { IsNotEmpty, Matches } from "class-validator";
import { MindfulRegex } from "../../../constants";

export class ChangePasswordDto {
    @IsNotEmpty()
    readonly email: string;

    @Matches(MindfulRegex.password.regex, {message: MindfulRegex.password.errorMessage})
    readonly newPassword: string;

    @IsNotEmpty()
    readonly currentPassword: string;
  } 