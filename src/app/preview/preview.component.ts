import {Component, ViewChild, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {AdAuthoringWorkflowState} from '../ad-authoring/ad-authoring.state';
import {AdAuthoringService} from '../ad-authoring/ad-authoring.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  adAuthoringObs: Observable<AdAuthoringWorkflowState>;
  storyAMPHTML = `<!DOCTYPE html>
  <html amp='🤠-invalid' lang='en'>
    <head>
      <meta charset='utf-8' />
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <script async src='https://cdn.ampproject.org/v0.js'></script>
      <script async custom-element='amp-story' src='https://cdn.ampproject.org/v0/amp-story-1.0.js'></script>
      <script async custom-element='amp-story-auto-ads' src='https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js'></script>
      <title>AMP Story</title>
      <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      <link rel='canonical' href='/' />
    </head>
    <body>
      <amp-story standalone>

        <amp-story-page id='three'>
          <amp-story-grid-layer template='vertical'>
            <h1>page three</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id='four'>
          <amp-story-grid-layer template='vertical'>
            <h1>page four</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id='five'>
          <amp-story-grid-layer template='vertical'>
            <h1>page five</h1>
          </amp-story-grid-layer>
        </amp-story-page>

      </amp-story>
    </body>
  </html>`;

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings();
  }

  @ViewChild('iframe') iframe: ElementRef;
  ngAfterViewInit() {
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow;
    doc.open();
    doc.write(this.storyAMPHTML);
    doc.close();
  }
}
