import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book.model';

export const catalogUrl = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
export const catalogApiKey = 'd3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  private list$: Observable<Book[]>;

  constructor(private httpClient: HttpClient) {
    const url = catalogUrl + '?apiKey=' + catalogApiKey;
    this.list$ = this.httpClient.get<Book[]>(url);
  }

  getList(): Observable<Book[]> {
    return this.list$;
  }

}
