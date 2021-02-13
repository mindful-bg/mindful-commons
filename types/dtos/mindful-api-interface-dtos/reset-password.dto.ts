import { Allow, IsNotEmpty, Matches } from "class-validator";

export class ResetPasswordDto {
    @IsNotEmpty()
    readonly email: string;
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    readonly newPassword: string;
    @IsNotEmpty()
    readonly newPasswordToken: number;
    @IsNotEmpty()
    readonly currentPassword: string;
  } 