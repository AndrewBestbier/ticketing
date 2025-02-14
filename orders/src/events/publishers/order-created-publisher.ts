import { Publisher, OrderCreatedEvent, Subjects } from '@codelight-ab/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
