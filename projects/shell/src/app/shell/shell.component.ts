import { Component, OnInit, Optional, Inject } from '@angular/core';
import { IShellContent } from '@models';
@Component({
    selector: 'app-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
    constructor(
        @Optional() @Inject('shell_content') public content: IShellContent
    ) {}

    ngOnInit(): void {}
}
