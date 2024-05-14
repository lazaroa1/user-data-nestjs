import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  name: string;
  @Column({ type: 'bigint', unique: true })
  cpf: number;
  @Column({ type: 'varchar', unique: true, length: 200 })
  email: string;
  @Column({ type: 'varchar', unique: true, length: 200 })
  login: string;
  @Column('text')
  password: string;
}
