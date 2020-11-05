import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PizzaSelectorComponent } from './pizza-selector.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PizzaSelectorComponent,
            },
        ]),
    ],
    declarations: [PizzaSelectorComponent],
})
export class PizzaSelectorModule {}
