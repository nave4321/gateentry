import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateentryComponent } from './gateentry/gateentry.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:"gateentry",component:GateentryComponent},
  {path:"reports",component:ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
