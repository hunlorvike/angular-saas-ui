import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dmvn-edit',
    standalone: true,
    imports: [],
    templateUrl: './edit.component.html',
    styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
    id: string | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            console.log(this.id);
        });
    }
}
