import { NgModule, Optional, Inject } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const applicationRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'pizza',
        loadChildren: () =>
            import('pizza-selector/PizzaModule').then(
                (x) => x.PizzaSelectorModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(applicationRoutes)],
    declarations: [HomeComponent],
})
export class ShellRoutingModule {
    constructor(@Optional() @Inject('shell_content') data) {
        console.log('LOADING Shell configuration', data);
    }
}
