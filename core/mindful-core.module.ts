import { Module } from "@nestjs/common";
import { LoggerModule } from "./logger/logger.module";
import { MindfulMsRegistratorModule } from "./ms-registrator/ms-registrator.module";

@Module({
    imports: [
        MindfulMsRegistratorModule,
        LoggerModule
    ],
    exports: [
        MindfulMsRegistratorModule,
        LoggerModule
    ]
})
export class MindfulCoreModule {}