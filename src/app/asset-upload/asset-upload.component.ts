import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';
import {Observable} from 'rxjs';
import {AdAuthoringWorkflowState} from '../ad-authoring/ad-authoring.state';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  adAuthoringObs: Observable<AdAuthoringWorkflowState>;

  constructor(private service: AssetUploadService) {
    this.adAuthoringObs = service.getAssets();
  }
  cardImageBase64 = '';
  file: File = null;
  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imgBase64Path = e.target.result;
      this.cardImageBase64 = imgBase64Path;
      this.service.updateAssets(this.cardImageBase64, this.file);
    };
    reader.readAsDataURL(this.file);
  }
}
