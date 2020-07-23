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

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings();
  }

  @ViewChild('iframe') iframe: ElementRef;
  ngAfterViewInit() {
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow;
    // doc.open();
    // doc.write("Initial write");
    // doc.close();
    // subscribe to state and write on change
    this.adAuthoringObs.subscribe(AMPHTML => {
      console.log('inside the subscribe: ');
      console.log(AMPHTML);
      doc.open();
      doc.write(AMPHTML.AMPHTMLstring);
      doc.close();
    });
  }
  // writeOnChange() {
  //   this.adAuthoringObs.subscribe(AMPHTML => {
  //     const doc =
  //       this.iframe.nativeElement.contentDocument ||
  //       this.iframe.nativeElement.contentWindow;
  //     console.log('inside the subscribe: ');
  //     console.log(AMPHTML);
  //     doc.open();
  //     doc.write(AMPHTML.AMPHTMLstring);
  //     doc.close();
  //   });
  // }
}
