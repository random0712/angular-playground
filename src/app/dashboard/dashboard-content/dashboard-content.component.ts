import { Component, OnInit } from '@angular/core';
import { iCardData } from './dashboard-content-card/dashboard-content-card.model';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

  cardsData: iCardData[] = [
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações GreenSock",
      projectDescription: "Aprendendo animações com a biblioteca GreenSock",
      tags: [
        {name: 'Angular 13', color: 'red'},
        {name: 'GreenSock', color: 'green'},
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
    {
      projectTitle: "Animações simples",
      projectDescription: "Projeto simples para teste do modulo de animações do angular e CSS dkjadkjakdjhkahdjkhadhsjkashgkdja adjhgakjsdjkahds asdghjkadhjkasd adga dauhd ajhd kauiadad iiaudia d iauda7da idaidaiudtaiudiadasiu adi dadiuadadi dayadsiadknadsdadaiya",
      tags: [
        {name: 'Angular 13', color: 'red'}
      ]
    },
  ];

  ngOnInit(): void {

  }
}
