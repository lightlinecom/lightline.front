import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-navigation',
  imports: [],
  templateUrl: './timeline-navigation.html'
})
export class TimelineNavigation {
  openYear: number | null = null;

  toggleYear(year: number) {
    this.openYear = this.openYear === year ? null : year;
  }
}
