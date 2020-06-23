import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from '@codelight-ab/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
