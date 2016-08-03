import {Injectable} from "@angular/core";

@Injectable()
export class HomeService {
    addOne(text:string):string {
        return text + '1';
    }
}