import { Controller, Post } from '@nestjs/common';
import { AzureBusClient } from './azure-bus-client';

@Controller('conta')
export class ContaController {
  constructor(private readonly azurebusClient: AzureBusClient) {}
  @Post()
  async criarConta(): Promise<object> {
    this.azurebusClient.emit('hands-on-criar-conta', {
      usuario: 1,
      conta: 2,
    });
    console.log('Emissão de mensagem para criação da conta');
    return { result: 'OK' };
  }
}
