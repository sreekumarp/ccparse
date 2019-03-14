import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildMessageRenderer } from './button.component';
import { DialogOverviewExampleDialog } from './dialog.component';
import { MaterialModule } from './material.module';
import { ProductOverviewComponent } from './overview.component';

@NgModule({
  declarations: [AppComponent, ProductOverviewComponent, DialogOverviewExampleDialog, ChildMessageRenderer],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([ChildMessageRenderer])
  ],
  providers: [],
  entryComponents: [ChildMessageRenderer, DialogOverviewExampleDialog],
  exports: [MaterialModule, AgGridModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
