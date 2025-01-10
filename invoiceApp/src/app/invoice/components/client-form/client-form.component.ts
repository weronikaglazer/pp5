import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  standalone: false,
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})

export class ClientFormComponent {
  client: Client = new Client();

  constructor(
    private ClientService: ClientService,
    private router: Router
  ){}

  onSubmit() {
    console.log(this.client)

    this.ClientService.addClient(this.client)
    this.router.navigateByUrl('/invoice/client-list')
  }
}
