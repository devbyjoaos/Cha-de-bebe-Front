import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Product } from '../selec-itens/itens-objects';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  name: String;
  productList: Product[] = [];

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('https://cha-de-bebe.herokuapp.com/produto/v1');
  }

  public concludeSelection(person: Person): Observable<Person>{
    return this.httpClient.post<Person>('https://cha-de-bebe.herokuapp.com/pessoa/v1', person);
  }
}
