import {Component, Input} from "@angular/core";
import {HomeService} from "../home/home.service.ts";

@Component({
    selector: 'foo',
    template: `
        <input type="text" (keyup)="changeFoo($event)"/>
        {{foo}}
        <div *ngFor="let fooObj of fooObjs">{{fooObj}}</div>
    `,
})
export class FooComponent {
    @Input()
    private foo:string;

    private fooObjs:string[] = [
        '1','2','a'
    ];

    constructor(private homeService:HomeService) {

    }

    alertMe() {
        alert(1);
        this.fooObjs.push('123');
    }

    private changeFoo(e:any) {
        this.foo = this.homeService.addOne(e.target.value);
    }
}