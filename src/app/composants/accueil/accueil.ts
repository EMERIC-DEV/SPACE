import { Component } from '@angular/core';
import { Navbarre } from '../navbarre/navbarre';
import { Menu } from '../../menu/menu';

@Component({
  imports: [Navbarre,Menu],
  selector: 'app-accueil',
  styleUrl: './accueil.css',
  templateUrl: './accueil.html',
})
export class Accueil {}
