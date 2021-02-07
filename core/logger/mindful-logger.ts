import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy } from "@nestjs/microservices";
import { CreateUpdateLogDto } from "../../types";
import { getUtcTimestamp } from "../../utils";
import { MindfulMsType } from "../ms-registrator/ms-type.enum";


@Injectable() 
export class MindfulLogger {
    private serviceName: string;

    constructor(
        @Inject(MindfulMsType.LOGGER) private readonly logger: ClientProxy,
        private readonly configService: ConfigService 
    ) {

        this.serviceName = this.configService.get('serviceName');
        if(!this.serviceName) {
            throw new Error('Service name config not found. Please provide it.')
        }
    }

    async log(info: string, trace: string, userEmail?: string, route?: string) {
        const log: CreateUpdateLogDto = {id: trace, userEmail, info, route};
        log.isError = false;
        log.timestamp = getUtcTimestamp();
        log.serviceIdentificator = this.serviceName;
        this.logger.emit('log', log);
    }

    async error(info: string, trace: string, userEmail?: string, route?: string) {
        const log: CreateUpdateLogDto = {id: trace, userEmail, info, route};
        log.isError = true;
        log.timestamp = getUtcTimestamp();
        log.serviceIdentificator = this.serviceName;
        this.logger.emit('log', log);
    }


    async warn(info: string, trace: string, userEmail?: string, route?: string) {
        const log: CreateUpdateLogDto = {id: trace, userEmail, info, route};
        log.isWarn = true;
        log.timestamp = getUtcTimestamp();
        log.serviceIdentificator = this.serviceName;
        this.logger.emit('log', log);
    }
}