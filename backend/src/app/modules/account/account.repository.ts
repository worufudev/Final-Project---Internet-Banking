import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountRepository extends Repository<Account> {
  constructor(dataSource: DataSource) {
    super(Account, dataSource.manager);
  }

  async findAccountByAccountNumber(accountNumber: string) {
    return this.findOne({
      where: {
        accountNumber,
      },
      relations: {
        user: true,
      },
    });
  }
}
