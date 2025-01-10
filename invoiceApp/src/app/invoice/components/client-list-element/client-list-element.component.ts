import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-list-element',
  standalone: false,
  templateUrl: './client-list-element.component.html',
  styleUrl: './client-list-element.component.scss'
})



export class ClientListElementComponent {
  @Input()
  client: Client = new Client()

  @Output()
  deletedClientEvent = new EventEmitter<Client>();
  
  onDeletedClient(client: Client) {
    this.deletedClientEvent.emit(client)
  }
}
