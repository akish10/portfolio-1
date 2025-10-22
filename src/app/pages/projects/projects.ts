import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-projects',
  imports: [Navbar, Footer],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
