import { Component } from '@angular/core';
import { Timeline } from '../../components/timeline/timeline';
import { TimelineEvent } from '../../interfaces/timeline-event';

@Component({
  selector: 'app-story',
  imports: [Timeline],
  templateUrl: './story.html'
})
export class Story {
  events: TimelineEvent[] = [
    {
      id: 1,
      date: new Date('2018-12-18T09:00:00'),
      title: 'Publicación del artículo',
      description: 'Amber Heard publica una columna en The Washington Post donde se describe como víctima de abuso doméstico, sin nombrar directamente a Johnny Depp.'
    },
    {
      id: 2,
      date: new Date('2019-03-01T10:30:00'),
      title: 'Demanda por difamación',
      description: 'Johnny Depp presenta una demanda por difamación contra Amber Heard, alegando daños a su carrera y reputación.'
    },
    {
      id: 3,
      date: new Date('2020-07-07T11:00:00'),
      title: 'Juicio en Reino Unido',
      description: 'Comienza un juicio separado en Londres contra un medio que calificó a Depp como agresor, generando antecedentes clave para el caso en EE.UU.'
    },
    {
      id: 4,
      date: new Date('2022-04-11T10:00:00'),
      title: 'Inicio del juicio en Virginia',
      description: 'Se inicia el juicio por difamación en Estados Unidos, con transmisión en vivo y alta cobertura mediática.'
    },
    {
      id: 5,
      date: new Date('2022-04-20T14:00:00'),
      title: 'Testimonio de Johnny Depp',
      description: 'Depp declara durante varios días, detallando su versión de la relación y negando las acusaciones de abuso.'
    },
    {
      id: 6,
      date: new Date('2022-05-04T13:30:00'),
      title: 'Testimonio de Amber Heard',
      description: 'Heard presenta su testimonio ante el tribunal, describiendo episodios de violencia y abuso durante la relación.'
    },
    {
      id: 7,
      date: new Date('2022-05-27T15:00:00'),
      title: 'Alegatos finales',
      description: 'Ambas partes presentan sus argumentos finales ante el jurado tras semanas de testimonios y evidencia.'
    },
    {
      id: 8,
      date: new Date('2022-06-01T15:00:00'),
      title: 'Veredicto del jurado',
      description: 'El jurado falla mayoritariamente a favor de Johnny Depp, otorgándole compensación por daños, aunque también concede una compensación menor a Amber Heard.',
      source: 'Tribunal de Virginia, 2022'
    },
    {
      id: 9,
      date: new Date('2022-07-01T15:00:00'),
      title: 'Veredicto del jurado',
      description: 'El jurado falla mayoritariamente a favor de Johnny Depp, otorgándole compensación por daños, aunque también concede una compensación menor a Amber Heard.',
      source: 'Tribunal de Virginia, 2022'
    },
    {
      id: 10,
      date: new Date('2022-08-01T15:00:00'),
      title: 'Veredicto del jurado',
      description: 'El jurado falla mayoritariamente a favor de Johnny Depp, otorgándole compensación por daños, aunque también concede una compensación menor a Amber Heard.',
      source: 'Tribunal de Virginia, 2022'
    }
  ];
}
