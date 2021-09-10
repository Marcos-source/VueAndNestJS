import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Response } from './Response';
@Entity()
export class Command {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description?: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Response, (command) => command.command)
  responses: Response[];
}
