import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../core/model/book.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  providers: [CatalogService]
})
export class CatalogListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(
    private catalog: CatalogService
  ) { }

  ngOnInit() {
    this.books$ = this.catalog.getList();
  }

}
