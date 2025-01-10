import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsList: Client[] = [];
   addClient(client: Client) {
    this.clientsList.push(client);
   }

   getClients() :Client[] {
    return this.clientsList
   }

   deleteClient(client: Client) {
    const index = this.clientsList.indexOf(client)
    this.clientsList = this.clientsList.splice(index, 1)
   }
}
