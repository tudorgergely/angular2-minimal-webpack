import {Component, ViewChild} from "@angular/core";
import {HomeService} from "./home.service.ts";
import {FooComponent} from "../foo/foo.component.ts";

@Component({
    selector: 'home',
    template: `
        <div>{{foo}}</div>
        <foo #foocmp [foo]="foo"></foo>
        <button (click)="callChildAlert()">Alert</button>
    `,
    providers: [
        HomeService
    ],
    directives: [
        FooComponent
    ]
})
export class HomeComponent {
    @ViewChild('foocmp')
    private fooComponent: FooComponent;

    private foo:string = 'foo2';

    constructor() {
        setTimeout(() => {
            this.foo = 'dsadsadsa';
        }, 500);
    }

    callChildAlert() {
        this.fooComponent.alertMe();
    }
}