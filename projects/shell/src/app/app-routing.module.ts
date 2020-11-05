import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./shell/shell.module').then((x) => x.ShellModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
