import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ShellComponent,
            },
        ]),
    ],
})
export class ShellModule {
    static forRoot(data: any): ModuleWithProviders<ShellModule> {
        console.log(data);
        return {
            ngModule: ShellModule,
            providers: [],
        };
    }
}
