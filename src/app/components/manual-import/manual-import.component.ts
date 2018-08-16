import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

const url = '/api/Import/UploadFile/666XXX';

@Component({
    selector: 'app-manual-import',
    templateUrl: './manual-import.component.html',
    styleUrls: ['./manual-import.component.css']
})
/** manual-import component*/
export class ManualImportComponent {
    public uploader = new FileUploader({ url: url, disableMultipart: false });
    hasBaseDropZoneOver = false;
    importId = '';

    constructor(private router: Router) {
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            this.importId = response;
            console.log('importId: ' + response);
        };

        this.uploader.onCompleteAll = () => {
            this.router.navigate(['/xxx', this.importId]);
            console.log('complete');
        };
    }

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }


}
