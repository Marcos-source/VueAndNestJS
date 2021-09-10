import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Command } from './Command';
@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => Command, (response) => response.responses)
  command: Command;
}
