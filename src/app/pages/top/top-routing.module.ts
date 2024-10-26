import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPage } from './top.page';

const routes: Routes = [
  {
    path: '',
    component: TopPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () =>
          import('../schedule/schedule.module').then(
            (m) => m.SchedulePageModule
          ),
      },
      {
        path: '',
        redirectTo: `schedule`,
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopPageRoutingModule {}
