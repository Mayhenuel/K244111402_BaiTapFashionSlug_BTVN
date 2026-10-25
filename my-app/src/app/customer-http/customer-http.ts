import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomerService } from '../services/customer-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-http',
  standalone: false,
  templateUrl: './customer-http.html',
  styleUrl: './customer-http.css'
})
export class CustomerHttp {

  public customerTypes: any[] = [];

  constructor(private customerService: CustomerService, private cdr: ChangeDetectorRef) {

    this.customerService.getCustomers().subscribe(
      data => {
        console.log(data);
        this.customerTypes = data;
        this.cdr.detectChanges();
      }
    );
    

  }

}