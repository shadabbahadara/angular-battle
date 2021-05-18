import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './Product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  pageTitle: string = 'Product List:';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  private _listFilter: string = '';
  errorMessage = '';
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(_listFilter: string) {
    this._listFilter = _listFilter;
    this.filteredProducts = this.filterProducts(this.listFilter);
  }

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    // this.listFilter
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
