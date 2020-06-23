import { Publisher, OrderCancelledEvent, Subjects } from '@codelight-ab/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
