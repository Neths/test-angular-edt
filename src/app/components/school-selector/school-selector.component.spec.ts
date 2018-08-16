/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SchoolSelectorComponent } from './school-selector.component';

let component: SchoolSelectorComponent;
let fixture: ComponentFixture<SchoolSelectorComponent>;

describe('schoolSelector component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SchoolSelectorComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SchoolSelectorComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});