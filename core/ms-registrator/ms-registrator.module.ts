import { Module  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { MindfulMsType } from './ms-type.enum';


@Module({
    imports: [
        ClientsModule
    ],
    providers: [
        {
            provide: MindfulMsType.LOGGER,
            useFactory: (configService: ConfigService) => {
                const options = { 
                    name: MindfulMsType.LOGGER, 
                    transport: Transport.RMQ,
                    options: configService.get('ms.logger')
                   }
                   if(!options.options.queue) {
                    throw new Error('No config found for mindful-ms-logger queue name(ms.logger.queueName)')
                }

                if(!options.options.urls || options.options.urls.length < 1) {
                    throw new Error('No config found for mindful-ms-logger url(ms.logger.url)')
                }
                   //@ts-ignore
                  return ClientProxyFactory.create(options);
            },
           
            inject: [ConfigService],
            
          },
          {
            provide: MindfulMsType.EMAIL_SENDER,
            useFactory: (configService: ConfigService) => {
            
              const options = { 
                name: MindfulMsType.EMAIL_SENDER, 
                transport: Transport.RMQ,
                options: configService.get('ms.emailSender')
               }
               if(!options.options.port) {
                 throw new Error('Port config not found for mindful-ms-email-sender')
               }
               if(!options.options.url || options.options.utl.length < 1) {
                throw new Error('Url config not found for mindful-ms-email-sender')
              }
               //@ts-ignore
              return ClientProxyFactory.create(options);
            },
           
            inject: [ConfigService],
            
          }, 
        {
          provide: MindfulMsType.LOG_CONTROLLER,
          useFactory: (configService: ConfigService) => {
            const options  = {
              name: MindfulMsType.LOG_CONTROLLER,
              transport: Transport.TCP,
              options: configService.get('ms.logController')
            }
            if(!options.options.port) {
              throw new Error('Port config not found for mindful-ms-logger-controller')
            }
            if(!options.options.url || options.options.utl.length < 1) {
             throw new Error('Url config not found for mindful-ms-logger-controller')
           }
            return ClientProxyFactory.create(options);
          },
          inject: [ConfigService],
        },
        {
          provide: MindfulMsType.BLOG,
          useFactory: (configService: ConfigService) => {
            const options  = {
              name: MindfulMsType.BLOG,
              transport: Transport.TCP,
              options: configService.get('ms.blog')
            }
            if(!options.options.port) {
              throw new Error('Port config not found for mindful-ms-blog')
            }
            if(!options.options.url || options.options.utl.length < 1) {
             throw new Error('Url config not found for mindful-ms-blog')
           }
            const clientProxy = ClientProxyFactory.create(options);
        
            return clientProxy
          },
          inject: [ConfigService],
        },
        {
          provide: MindfulMsType.CONTENT,
          useFactory: (configService: ConfigService) => {
            const options  = {
              name: MindfulMsType.CONTENT,
              transport: Transport.TCP,
              options: configService.get('ms.content')
            }
            if(!options.options.port) {
              throw new Error('Port config not found for mindful-ms-content')
            }
            if(!options.options.url || options.options.utl.length < 1) {
             throw new Error('Url config not found for mindful-ms-content')
           }
            const clientProxy = ClientProxyFactory.create(options);
        
            return clientProxy
          },
          inject: [ConfigService],
        },
    ],
    exports: [
      MindfulMsType.LOGGER, 
      MindfulMsType.LOG_CONTROLLER, 
      MindfulMsType.CONTENT, 
      MindfulMsType.BLOG,
      MindfulMsType.EMAIL_SENDER
    ]
})
export class MindfulMsRegistratorModule {}