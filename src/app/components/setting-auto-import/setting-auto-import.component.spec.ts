/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SettingAutoImportComponent } from './setting-auto-import.component';

let component: SettingAutoImportComponent;
let fixture: ComponentFixture<SettingAutoImportComponent>;

describe('setting-auto-import component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SettingAutoImportComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SettingAutoImportComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});