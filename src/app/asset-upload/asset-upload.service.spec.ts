import { TestBed } from '@angular/core/testing';

import { AssetUploadService } from './asset-upload.service';

describe('AssetUploadService', () => {
  let service: AssetUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
