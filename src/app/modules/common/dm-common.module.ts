import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PageNotFoundComponent,
    ProgressBarComponent,
    SpinnerComponent,
} from '.';

@NgModule({
    imports: [
        CommonModule,
        PageNotFoundComponent,
        ProgressBarComponent,
        SpinnerComponent,
    ],
    exports: [PageNotFoundComponent, ProgressBarComponent, SpinnerComponent],
})
export class DmCommonModule {}
