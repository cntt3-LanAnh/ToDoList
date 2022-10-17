import { Expose } from 'class-transformer';
import { Role } from 'types/role';

export class LoginResDto {
  token: string;

  @Expose({ name: 'refresh-token' })
  refreshToken: string;
}

export class ProfileResDto {
  email: string;
  role: Role;
  kanjiName: {
    firstName: string;
    lastName: string;
  };
  furiganaName: {
    firstName: string;
    lastName: string;
  };
}
