import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: 'market-queries',
    loadChildren: "./market-queries/market-queries.module#MarketQueriesModule"
  }];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  imports: [RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("AppRoutingModule loaded")
  }
}
