import { Component } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-form',
  standalone: false,
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {
  client: Client = new Client();
}
