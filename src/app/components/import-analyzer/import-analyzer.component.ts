import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-import-analyzer',
    templateUrl: './import-analyzer.component.html',
    styleUrls: ['./import-analyzer.component.css']
})
/** import-analyzer component*/
export class ImportAnalyzerComponent implements OnInit {
    /** import-analyzer ctor */
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit(): void {

    }
}
