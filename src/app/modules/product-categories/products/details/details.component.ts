import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  bannerPath = environment.base_url + 'storage/fullImages/';
  product: any | null = null;
  constructor(public modalRef: MdbModalRef<DetailsComponent>) {}
}
