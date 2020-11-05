import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const applicationRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('app/ShellConfigurationModule').then(
                (x) => x.ShellRoutingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(applicationRoutes)],
})
export class ShellRoutingModule {}
