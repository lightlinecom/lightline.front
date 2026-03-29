import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { TimelineLiveIndicator } from '../../../components/timeline-live-indicator/timeline-live-indicator';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, TimelineLiveIndicator, Footer],
  templateUrl: './layout.html'
})
export class Layout {}
