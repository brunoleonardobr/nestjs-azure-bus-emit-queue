import { Module } from '@nestjs/common';
import { AzureBusClient } from './azure-bus-client';
import { ContaController } from './conta.controller';

@Module({
  controllers: [ContaController],
  providers: [AzureBusClient],
})
export class ContaModule {}
