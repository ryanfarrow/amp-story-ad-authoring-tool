import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';

export interface AdAuthoringWorkflowState {
  readonly landingUrl?: string;
  readonly landingType?: LandingTypeEnum;
  readonly callToAction?: CallToActionEnum;
  readonly fileSrc?: string;
  readonly file?: File;
  readonly AMPHTMLstring: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdAuthoringWorkflowStateContainer {
  AMPAdHTML = `<!doctype html>
  <html ⚡4ads>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1">
    <style amp4ads-boilerplate>body{visibility:hidden}</style>
    <script async src="https://cdn.ampproject.org/amp4ads-v0.js"></script>
  </head>
  <body>
    <p>Hello, fake ad with srcdoc.<p>
    <amp-img
      layout="fixed"
      height="250"
      width="300"
      src="https://placekitten.com/300/250"
    ></amp-img>
  </body>
  </html>`;

  private state$: BehaviorSubject<
    AdAuthoringWorkflowState
  > = new BehaviorSubject({
    AMPHTMLstring: this.AMPAdHTML,
  });

  getValue(): AdAuthoringWorkflowState {
    return this.state$.getValue();
  }

  getState(): Observable<AdAuthoringWorkflowState> {
    return this.state$.asObservable();
  }

  setState(nextState: AdAuthoringWorkflowState): void {
    this.state$.next(nextState);
  }
}
