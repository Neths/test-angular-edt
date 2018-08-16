/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ImportsHistoryComponent } from './imports-history.component';

let component: ImportsHistoryComponent;
let fixture: ComponentFixture<ImportsHistoryComponent>;

describe('imports-history component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ImportsHistoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ImportsHistoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});