import { Allow, IsNotEmpty, Matches } from "class-validator";
import { MindfulRegex } from "../../../constants";

export class ResetPasswordDto {
    @Matches(MindfulRegex.password.regex, {message: MindfulRegex.password.errorMessage})
    readonly newPassword: string;

    @IsNotEmpty()
    readonly newPasswordToken: number;
  } 