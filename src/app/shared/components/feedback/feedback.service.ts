import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private serviceId = 'service_cbzoe5b'; // Ensure this is the correct service ID
  private templateId = 'template_5ahx7eq'; // Ensure this is the correct template ID
  private publicKey = '7D878_ni0EDR94-6l'; // Ensure this is the correct public key

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
