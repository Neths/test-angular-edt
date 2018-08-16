/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ManualImportComponent } from './manual-import.component';

let component: ManualImportComponent;
let fixture: ComponentFixture<ManualImportComponent>;

describe('manual-import component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManualImportComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ManualImportComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});