import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './journey-content/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { JourneyListComponent } from './journey-content/journey-list/journey-list.component';
import { JourneyDetailComponent } from './journey-content/journey-detail/journey-detail.component';
import { StepDetailComponent } from './journey-content/step-detail/step-detail.component'

const routes: Routes = [
  { path: 'journeys', component: JourneyListComponent },
  { path: 'journeys/:journeyId', component: JourneyDetailComponent },
  { path: 'journeys/:journeyId/:stepId', component: StepDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
