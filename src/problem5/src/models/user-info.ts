import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserInfo {
  /**
   * User id, auto increased number.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User name
   */
  @Column()
  name: string;

  /**
   * More user information
   */
  @Column('text')
  description: string;
}
