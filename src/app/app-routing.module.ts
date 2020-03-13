/**
 * Router Module
 */
// import { HomeComponent } from 'src/app/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/landing/landing.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/landing',
		pathMatch: 'full'
	},
	{
		path: 'landing',
		component: LandingComponent,
		data: { title: 'Landing' }
	},
	{
		path: 'about',
		component: AboutComponent,
		data: {title: 'About'}
	}
];

@NgModule({
	// imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],

exports: [RouterModule]
})
export class AppRoutingModule { }
