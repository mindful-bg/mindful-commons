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
                const url = configService.get('ms.logger.url');
                const queueName = configService.get('ms.logger.queueName');
                if(!queueName) {
                    throw new Error('No config found for logger queue name(ms.logger.queueName)')
                }

                if(!url) {
                    throw new Error('No config found for logger url(ms.logger.url)')
                }
              const mathSvcOptions = { 
                name: 'LOGGER_MS', 
                transport: Transport.RMQ,
                options: {
                  urls: [url],
                  queue: queueName,
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