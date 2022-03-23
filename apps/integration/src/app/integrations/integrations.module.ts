import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vertical-tabset-back-to-top',
    loadChildren: () =>
      import(
        './vertical-tabset-back-to-top/vertical-tabset-back-to-top.module'
      ).then((m) => m.VerticalTabsetBackToTopModule),
  },
  {
    path: 'flyout-tabs',
    loadChildren: () =>
      import('./flyout-tabs/flyout-tabs.module').then(
        (m) => m.FlyoutTabsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationsRoutingModule {}

@NgModule({
  imports: [IntegrationsRoutingModule],
})
export class IntegrationsModule {}
