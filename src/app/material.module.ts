import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule, CovalentJsonFormatterModule, CovalentChipsModule
} from '@covalent/core'; */
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const FLEX_LAYOUT_MODULES: any[] = [FlexLayoutModule];

const ANGULAR_MODULES: any[] = [FormsModule, ReactiveFormsModule];

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSliderModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatChipsModule
];

/* const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule, CovalentJsonFormatterModule, CovalentChipsModule
];
 */
const CHART_MODULES: any[] = [];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    // BrowserAnimationsModule,
    MATERIAL_MODULES,
    //COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES
  ],
  declarations: [],
  exports: [
    ANGULAR_MODULES,
    // BrowserAnimationsModule,
    MATERIAL_MODULES,
    //COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES
  ]
})
export class MaterialModule {}
