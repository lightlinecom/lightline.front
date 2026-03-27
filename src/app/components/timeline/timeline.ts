import { Component, input } from '@angular/core';
import { TimelineItem } from "../timeline-item/timeline-item";
import { TimelineEvent } from '../../interfaces/timeline-event';

@Component({
  selector: 'app-timeline',
  imports: [TimelineItem],
  templateUrl: './timeline.html'
})
export class Timeline {
  events = input.required<TimelineEvent[]>();
}
