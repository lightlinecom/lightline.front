import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TimelineEvent } from '../../interfaces/timeline-event';

@Component({
  selector: 'app-timeline-item',
  imports: [DatePipe],
  templateUrl: './timeline-item.html'
})
export class TimelineItem {
  event = input.required<TimelineEvent>();
}
