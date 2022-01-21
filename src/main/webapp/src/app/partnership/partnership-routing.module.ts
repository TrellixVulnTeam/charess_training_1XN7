import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'demands',
        loadChildren: () =>
            import('./demands/demands.module').then((m) => m.DemandsModule),
    },
    {
        path: 'request',
        loadChildren: () =>
            import('./request/request.module').then((m) => m.RequestModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PartnershipRoutingModule {}
