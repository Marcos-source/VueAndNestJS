import { Injectable } from '@nestjs/common';
import { getRepository } from "typeorm";
import { User } from "./entity/User";
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getGoodBye(): Promise<any> {
    const users = await getRepository(User).find()
    return users;
  }
}
