/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ImportAnalyzerComponent } from './import-analyzer.component';

let component: ImportAnalyzerComponent;
let fixture: ComponentFixture<ImportAnalyzerComponent>;

describe('import-analyzer component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ImportAnalyzerComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ImportAnalyzerComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});