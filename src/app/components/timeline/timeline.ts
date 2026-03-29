import { Component, input } from '@angular/core';
import { TimelineItem } from "../timeline-item/timeline-item";
import { TimelineEvent } from '../../interfaces/timeline-event';
import { TimelineNavigation } from '../timeline-navigation/timeline-navigation';

@Component({
  selector: 'app-timeline',
  imports: [TimelineItem, TimelineNavigation],
  templateUrl: './timeline.html'
})
export class Timeline {
  events = input.required<TimelineEvent[]>();
}