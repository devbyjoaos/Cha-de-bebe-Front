import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../components/snackbar/snackbar.service';
import { ServiceService } from '../service/service.service';
import { Product } from './itens-objects';

@Component({
  selector: 'app-selec-itens',
  templateUrl: './selec-itens.component.html',
  styleUrls: ['./selec-itens.component.scss']
})
export class SelecItensComponent implements OnInit {

  name: String;
  productList: Product[] = [];
  size: number = 0;

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: SnackBarService
  ) {
    this.service.getProducts().subscribe( result => {
      this.productList = result;
      this.size = this.productList.length;
    });
    this.activatedRoute.params.subscribe(params => {
      this.name = params.name;
    });
  }

  ngOnInit(): void {
  }

  selectProducts(){
    const selectedList = this.productList.filter(x => x.checked);
    if(!(selectedList.length > 0)){
      this.snackbar.error("Selecione ao menos uma opção");
    }
    else{
      this.service.name = this.name;
      this.service.productList = selectedList;
      this.router.navigate(["confirmar", this.name]);
    }
  }

}
