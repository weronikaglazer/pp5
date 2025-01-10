import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  standalone: false,
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})

export class ClientListComponent implements OnDestroy {
  clientsList: Client[] = []

  constructor(
    private ClientService: ClientService,
    private router: Router
  ){
    this.clientsList = this.ClientService.getClients()
    console.log(this.clientsList)
  }

  redirect(){
    this.router.navigateByUrl('/invoice/client-form')
  }

  ngOnDestroy() {
    console.log("Closing the component")
  }

  deletedClient(client: Client) {
    this.ClientService.deleteClient(client)
    console.log("Deleting the client with NIP: " + client.nip)
  }
}
