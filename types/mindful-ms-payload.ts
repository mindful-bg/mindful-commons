import { User } from "./user.entity";

export class MindfulMsPayload<T> {
    trace: string;
    loggedUser?: User;
    payload?: T;
}