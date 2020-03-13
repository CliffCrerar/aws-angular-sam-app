
import { LoadingBarService } from 'src/app/_service/loadingbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public appNavTitle: string;
	public appSectionTitle: string;
	public loading = true;
	constructor(private loadingService: LoadingBarService) {
		this.appSectionTitle = 'Properties';
		this.appNavTitle = 'GloVent Application Demo';
		this.loadingService.loadingBarState.subscribe((newLoadingSate: boolean) => {
			this.loading = newLoadingSate;
		});
	}


	ngOnInit(): void {
	}

	setViewName({ sectionTitle }: { sectionTitle: string }) {
		console.log('sectionTitle: ', sectionTitle);
		this.appSectionTitle = sectionTitle;
	}
}
