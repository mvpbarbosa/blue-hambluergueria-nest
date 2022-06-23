import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [];

  getAll() {
    return this.users;
  }
  create() {
    return 'Criação';
  }
}
