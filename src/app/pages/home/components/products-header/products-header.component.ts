import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: []
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort ='desc';
  itemsShowCount = 12

  constructor() {}

  ngOnInit() {}

  onSortUpdate(newSort: string): void {
    this.sort = newSort
    this.sortChange.emit(newSort)
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumsUpdate(colsNum: number): void {
    this.columsCountChange.emit(colsNum)
  }
}
