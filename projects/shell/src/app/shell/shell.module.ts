import { NgModule, ModuleWithProviders, Optional, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ShellComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./shell-routing.module').then(
                                (x) => x.ShellRoutingModule
                            ),
                    },
                ],
            },
        ]),
    ],
})
export class ShellModule {
    constructor(@Optional() @Inject('shell_content') data) {
        console.log('LOADING Shell configuration', data);
    }
}
