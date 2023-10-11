import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'patients', loadChildren: () => import('@modules/patient/patient.module').then((m) => m.PatientModule) },
  { path: '', redirectTo: 'patients', pathMatch:'full' },
  { path: '**', redirectTo: 'patients', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
