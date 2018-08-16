import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FileUploadModule   } from 'ng2-file-upload';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ManualImportComponent } from './components/manual-import/manual-import.component';
import { ImportsHistoryComponent } from './components/imports-history/imports-history.component';
import { SettingAutoImportComponent } from './components/setting-auto-import/setting-auto-import.component';
import { ImportAnalyzerComponent } from './components/import-analyzer/import-analyzer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ManualImportComponent,
    ImportsHistoryComponent,
    SettingAutoImportComponent,
    ImportAnalyzerComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'manual-import', component: ManualImportComponent },
      { path: 'imports-history', component: ImportsHistoryComponent },
      { path: 'setting-auto-import', component: SettingAutoImportComponent },
      { path: 'import-analyzer', component: ImportAnalyzerComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
