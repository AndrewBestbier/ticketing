import { Publisher, Subjects, TicketCreatedEvent } from '@codelight-ab/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
