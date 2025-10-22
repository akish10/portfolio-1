import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-contact',
  imports: [Footer, Navbar],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
