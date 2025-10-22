import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {Navbar} from '../../components/navbar/navbar';
@Component({
  selector: 'app-about',
  imports: [Footer, Navbar],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
