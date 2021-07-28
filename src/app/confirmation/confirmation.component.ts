import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person, Product } from '../selec-itens/itens-objects';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  name: String;
  productList: Product[] = [];

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {


    this.productList = this.service.productList;
    this.route.params.subscribe(params => {
      this.name = params.name;

      if(!(this.service.productList.length > 0)){
        this.router.navigate(["escolha", this.name]);
      }

    });
  }

  ngOnInit(): void {
  }

  conclude(){
    this.productList.forEach(product => {
      var person = new Person();
      person.name = this.name;
      person.productId = product.id;

      this.service.concludeSelection(person).subscribe();
    }
    );
    this.router.navigate(["obrigado", this.name]);
  }

}
