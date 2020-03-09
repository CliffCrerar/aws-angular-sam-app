import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
	{ path: '', redirectTo: '/landing', pathMatch: 'full' },
	{ path: 'landing', component: LandingComponent, data: { title: 'Landing' } },
	{ path: 'home', component: HomeComponent, data: { title: 'Home' } }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
