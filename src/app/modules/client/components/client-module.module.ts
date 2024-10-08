import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundSvgComponent } from './background-svg/background-svg.component';

@NgModule({
    imports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        BackgroundSvgComponent,
    ],
    exports: [HeaderComponent, FooterComponent, BackgroundSvgComponent],
})
export class ClientModuleModule {}
