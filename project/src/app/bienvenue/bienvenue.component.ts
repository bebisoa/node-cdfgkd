import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css'],
})
export class BienvenueComponent implements OnInit {
  bienvenue = {
    title: 'Bienvenue',
    subtitle: 'Bienvenue sur 02 Celsius!',
    content: 'Résultats en temps réel',
    image: 'assets/bg00.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
