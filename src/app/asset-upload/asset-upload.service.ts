import { Injectable } from '@angular/core';
import { AdAuthoringWorkflowStateContainer, AdAuthoringWorkflowState } from '../ad-authoring/ad-authoring.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetUploadService {

  constructor(private readonly adAuthoringState: AdAuthoringWorkflowStateContainer) {}

  updateAssets(file: string) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(), file
    });
  }

  getAssets(): Observable<AdAuthoringWorkflowState> {
    return this.adAuthoringState.getState();
  }
}
