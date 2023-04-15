import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: []
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  sort ='sort';
  itemsShowCount = 12

  constructor() {}

  ngOnInit() {}

  onSortUpdate(newSort: string): void {
    this.sort = newSort
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
  }

  onColumsUpdate(colsNum: number): void {
    this.columsCountChange.emit(colsNum)
  }
}
