import { Component } from '@angular/core';
import { AssetUploadService } from './asset-upload.service';
import { ClassField } from '@angular/compiler';
import { Observable } from 'rxjs';
import { AdAuthoringWorkflowState } from '../ad-authoring/ad-authoring.state';
import { AdAuthoringService } from '../ad-authoring/ad-authoring.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss']
})
export class AssetUploadComponent {

  adAuthoringObs: Observable<AdAuthoringWorkflowState>;

  constructor(private service: AssetUploadService) {
    this.adAuthoringObs = service.getAssets().pipe(tap(state => console.log(state)));
  }
  cardImageBase64: string = '';
  file: File = null;
  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    console.log('logging the file: ')
    console.log(this.file);
    // save and update assets state
    // this.service.updateAssets(file);
    console.log(this.file)
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // console.log('logging e')
      // console.log(e)
      const imgBase64Path = e.target.result;
      this.cardImageBase64 = imgBase64Path;
      this.service.updateAssets(this.cardImageBase64, this.file);
      // console.log('after updating assets in state');
      // console.log(this.cardImageBase64);
    };
    reader.readAsDataURL(this.file);
  }

}
