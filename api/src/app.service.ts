import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from './entity/User';

@Injectable()
export class AppService {
  async getUsers(): Promise<any> {
    const users = await getRepository(User).find();
    return users;
  }

  async createUser(data): Promise<any> {
    try {
      const newUser = getRepository(User).create(data);
      const response = await getRepository(User).save(newUser);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async sayHello(data): Promise<any> {}

  async readChanel(data): Promise<any> {}

  async sendScheduleMessage(data): Promise<any> {}
}
