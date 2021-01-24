import { Module  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { MindfulLogger } from './mindful-logger';


@Module({
    imports: [
        ClientsModule
    ],
    providers: [
        {
            provide: 'LOGGER_MS',
            useFactory: (configService: ConfigService) => {
              const mathSvcOptions = { 
                name: 'LOGGER_MS', 
                transport: Transport.RMQ,
                options: {
                  urls: [configService.get('ms.logger.url')],
                  queue: configService.get('ms.logger.queueName'),
                  queueOptions: {
                    durable: false
                        },
                  },
               }
               //@ts-ignore
              return ClientProxyFactory.create(mathSvcOptions);
            },
           
            inject: [ConfigService],
            
          },
          MindfulLogger
    ],
    exports: [
        MindfulLogger
    ]
})
export class LoggerModule {}