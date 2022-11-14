import { Module } from '@nestjs/common';
import { LoggerModule } from './common/logger/logger.module';
import { UserModule } from './app/modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './app/modules/account/account.module';
import { ReceiverModule } from './app/modules/receiver/receiver.module';
import dbConfig from './configs/db/mySql';

@Module({
  imports: [
    LoggerModule,
    UserModule,
    TypeOrmModule.forRoot(dbConfig),
    AccountModule,
    ReceiverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
