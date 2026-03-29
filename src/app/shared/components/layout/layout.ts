import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { TimelineLiveIndicator } from '../../../components/timeline-live-indicator/timeline-live-indicator';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, TimelineLiveIndicator],
  templateUrl: './layout.html'
})
export class Layout {}
