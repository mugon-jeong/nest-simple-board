import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../entity/user.entity';

export default class UserSeeder implements Seeder {
  track?: boolean;

  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(User);
    await repository.insert([
      {
        username: 'fastcampus',
        name: '패스트캠퍼스',
        password: 'fastcampus1234',
      },
    ]);
  }
}
