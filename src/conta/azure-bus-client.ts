import { ServiceBusClient } from '@azure/service-bus';
import { Injectable } from '@nestjs/common';
import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';

@Injectable()
export class AzureBusClient extends ClientProxy {
  private serviceBusClient: ServiceBusClient;
  constructor() {
    super();
    this.serviceBusClient = new ServiceBusClient('<AzureBusCredentials>');
  }
  async connect(): Promise<any> {
    console.log('conectou');
  }
  close() {
    console.log('fechou');
    this.serviceBusClient.close();
  }
  protected publish(
    packet: ReadPacket<any>,
    callback: (packet: WritePacket<any>) => void,
  ): () => void {
    throw new Error('Method not implemented.');
  }
  async dispatchEvent<T = any>(packet: ReadPacket<any>): Promise<any> {
    const sender = this.serviceBusClient.createSender(packet.pattern);
    const message = { body: packet.data };
    await sender.sendMessages(message);
    sender.close();
  }
}
