import { Component, input } from '@angular/core';
import { TimelineItem } from "../timeline-item/timeline-item";
import { TimelineEvent } from '../../interfaces/timeline-event';
import { TimelineNavigation } from '../timeline-navigation/timeline-navigation';
import { TimelineLiveIndicator } from '../timeline-live-indicator/timeline-live-indicator';

@Component({
  selector: 'app-timeline',
  imports: [TimelineLiveIndicator, TimelineItem, TimelineNavigation],
  templateUrl: './timeline.html'
})
export class Timeline {
  events = input.required<TimelineEvent[]>();
}