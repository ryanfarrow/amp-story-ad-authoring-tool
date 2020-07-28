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
  // adAMPHTML =
  //   '<!doctype html><html amp4ads><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,minimum-scale=1"><meta name="amp-cta-type" content="LEARN_MORE"><meta name="amp-cta-url" content="https://www.amp.dev"><style amp4ads-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/amp4ads-v0.js"></script></head><body><p>Hello, fake ad with srcdoc</p><amp-img layout="fixed" height="250" width="300" src="https://placekitten.com/300/250"></amp-img></body></html>';

  generateAMPHTML(cta: string) {
    // const adAMPHTML =
    // '\"\\\<!doctype html\\>\\<html amp4ads\\>\\<head\\>\\<meta charset=\\"utf-8\\"\\>\\<meta name=\\"viewport\\" content=\"width=device-width,minimum-scale=1\\"\\>\\<meta name=\\"amp-cta-type\\" content=\\"LEARN_MORE\\"\\>\\<meta name=\\"amp-cta-url\\" content=\\"https://www.amp.dev\\"\\>\\<style amp4ads-boilerplate\\>body{visibility:hidden}\\</style\\>\\<script async src=\\"https://cdn.ampproject.org/amp4ads-v0.js\\"\\>\\<\/script\\>\\</head\\>\\<body\\>\\<p\\>Hello, fake ad with srcdc '+ Date.now() +'\\</p\\>\\<amp-img layout=\\"fixed\\" height=\\"250\\" width=\\"300\\" src=\\"https://placekitten.com/300/250\"\\>\\</amp-img\\>\\</body\\>\\</html\\>\\"';

  const adAMPHTML =
    '"<!doctype html><html amp4ads><head><meta charset=\\"utf-8\\"><meta name=\\"viewport\\" content=\\"width=device-width,minimum-scale=1\\"><meta name=\\"amp-cta-type\\" content=\\"' + cta + '\\"><meta name=\\"amp-cta-url\\" content=\\"https:\\/\\/www.amp.dev\\"><style amp4ads-boilerplate>body{visibility:hidden}<\\/style><script async src=\\"https:\\/\\/cdn.ampproject.org\\/amp4ads-v0.js\\"><\\/script><\\/head><body><p>Hello, fake ad with srcdoc'+ Date.now() +'<\\/p><amp-img layout=\\"fixed\\" height=\\"250\\" width=\\"300\\" src=\\"https:\\/\\/placekitten.com\\/300\\/250\\"><\\/amp-img><\\/body><\\/html>"';


      const storyAMPHTML =
    `<!DOCTYPE html>
  <html amp="🤠-invalid" lang="en">
    <head>
      <meta charset="utf-8" />
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
      <script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"></script>
      <title>AMP Story</title>
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <link rel="canonical" href="/" />
    </head>
    <body>
      <amp-story standalone>  
        <amp-story-auto-ads id="i-amphtml-demo-1">
          <script type="application/json">
            {
              "ad-attributes": {
                "type": "fake",
                "srcdoc": ` +
    adAMPHTML +
    `,
                "a4a-conversion": true
              }
            }
          </script>
        </amp-story-auto-ads>
        <amp-story-page class="i-amphtml-story-ad-cover" id="cover">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog2.jpg"
              width="720"
              height="1280"
              layout="responsive"
            >
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Hello World</h1>
            <p>This is an AMP Story.</p>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="page-2">
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay
              loop
              width="720"
              height="960"
              poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
              layout="responsive"
            >
              <source
                src="https://amp.dev/static/samples/video/story_video_dog.mp4"
                type="video/mp4"
              />
            </amp-video>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="three">
          <amp-story-grid-layer template="vertical">
            <h1>page three</h1>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="four">
          <amp-story-grid-layer template="vertical">
            <h1>page four</h1>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="five">
          <amp-story-grid-layer template="vertical">
            <h1>page five</h1>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="six">
          <amp-story-grid-layer template="vertical">
            <h1>page six</h1>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="seven">
          <amp-story-grid-layer template="vertical">
            <h1>page seven</h1>
          </amp-story-grid-layer>
        </amp-story-page>
  
        <amp-story-page id="eight">
          <amp-story-grid-layer template="vertical">
            <h1>page eight</h1>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </body>
  </html>`;


    return storyAMPHTML;
  }

  private state$: BehaviorSubject<
    AdAuthoringWorkflowState
  > = new BehaviorSubject({
    AMPHTMLstring: this.generateAMPHTML(CallToActionEnum.MORE),
  });

  getValue(): AdAuthoringWorkflowState {
    return this.state$.getValue();
  }

  getState(): Observable<AdAuthoringWorkflowState> {
    return this.state$.asObservable();
  }

  setState(nextState: AdAuthoringWorkflowState): void {
    const AMPHTMLstring = this.generateAMPHTML(nextState.callToAction);
    nextState = {...nextState, AMPHTMLstring};
    this.state$.next(nextState);
  }
}
