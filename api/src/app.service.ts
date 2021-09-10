import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Command } from './entity/Command';

@Injectable()
export class AppService {
  async getCommands(): Promise<any> {
    const users = await getRepository(Command).find();
    return users;
  }

  async createCommand(data): Promise<any> {
    try {
      const newCommand = getRepository(Command).create(data);
      const response = await getRepository(Command).save(newCommand);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
