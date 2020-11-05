import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('shell/ShellModule').then((m) => m.ShellModule),
    },
];

import { IShellContent } from '@models';
const models: IShellContent = {
    applicationName: 'Demo',
    navigation: [{ route: 'home', label: 'Home' }],
};

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [
        {
            provide: 'shell_content',
            useValue: models,
        },
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
