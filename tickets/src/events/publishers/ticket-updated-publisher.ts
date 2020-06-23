import { Publisher, Subjects, TicketUpdatedEvent } from '@codelight-ab/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
