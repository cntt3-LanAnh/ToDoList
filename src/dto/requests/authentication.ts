import { Expose } from 'class-transformer';
import { assignDataToInstance } from 'utilities/helper';

export class LoginReqDto {
  email: string;
  @Expose({ name: 'pwd' })
  password: string;
}

export class ResetPasswordReqDto {
  email: string;
}

export class NewPasswordReqDto {
  @Expose({ name: 'pwd' })
  password: string;
  token: string;

  passwordConfirm?: string;

  constructor(data?: Partial<NewPasswordReqDto>) {
    assignDataToInstance(data, this);
  }
}
