import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppConfigService } from './core/configs/app-config.service';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
    selector: 'dai-minh-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    data: NzSafeAny;

    private appConfigService = inject(AppConfigService);

    ngOnInit(): void {
        this.data = this.appConfigService.config;
        console.log('Config data in component:', this.data);
    }
}
