import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService2 {
    productsImage =[
        {"ProductId":"p1", "ProductName":"Coca", "Price":100, "Image": "https://todaycoffee.vn/wp-content/uploads/2026/08/cocacola.jpg"},
        {"ProductId":"p2", "ProductName":"Pepsi", "Price":300, "Image": "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/2443/344807/bhx/frame-1_202509101650448252.jpg"},
        {"ProductId":"p3", "ProductName":"Sting", "Price":200, "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAf8HYPOSFTwTwr2Ph684mlB7sxbANSrryIk9_aM5Av9SAQ7cT7Ai_swL&s=10"},
    ]
    constructor(){ }
    getProductsWithImage()
    {
        return this.productsImage
    }
    getProductDetails (id:any){
        return this.productsImage.find(x=>x.ProductId==id)
    }
}
