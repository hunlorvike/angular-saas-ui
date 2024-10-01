import { CommonModule } from '@angular/common';
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProgressBarService, SpinnerService } from '@services/ui';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'dai-minh-home',
  standalone: true,
  imports: [CommonModule, NzButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  private progressBarService = inject(ProgressBarService);
  private spinnerService = inject(SpinnerService);

  startLoading() {
    // this.progressBarService.setLoading(true);
    // setTimeout(() => {
    //   this.progressBarService.setLoading(false);
    // }, 3000);
    // this.spinnerService.setLoading(true);
  }
}
