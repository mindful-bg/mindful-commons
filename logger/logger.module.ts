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
                const options = { 
                    name: 'LOGGER_MS', 
                    transport: Transport.RMQ,
                    options: configService.get('ms.logger')
                   }
                   if(!options.options.queue) {
                    throw new Error('No config found for logger queue name(ms.logger.queueName)')
                }

                if(!options.options.urls || options.options.urls.length < 1) {
                    throw new Error('No config found for logger url(ms.logger.url)')
                }
                   //@ts-ignore
                  return ClientProxyFactory.create(options);
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