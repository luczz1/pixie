import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('../character-overview/character-overview.module').then(
      //       (m) => m.CharacterOverviewPageModule
      //     ),
      // },
      {
        path: '',
        redirectTo: `home`,
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
