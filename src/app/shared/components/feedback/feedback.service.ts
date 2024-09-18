import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../../../envorinments/envorinments';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private serviceId = environment.serviceId;
  private templateId = environment.templateId;
  private publicKey = environment.publicKey;

  constructor() {}

  sendEmail(templateParams: any) {
    return emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams,
      this.publicKey
    );
  }
}
