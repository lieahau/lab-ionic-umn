import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'daftar-calon-gebetan', pathMatch: 'full' },
  { path: 'daftar-calon-gebetan', loadChildren: './daftar-calon-gebetan/daftar-calon-gebetan.module#DaftarCalonGebetanPageModule' },
  { path: 'target-gebetan', loadChildren: './target-gebetan/target-gebetan.module#TargetGebetanPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
