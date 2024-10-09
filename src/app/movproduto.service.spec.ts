import { TestBed } from '@angular/core/testing';

import { MovprodutoService } from './movproduto.service';

describe('MovprodutoService', () => {
  let service: MovprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
