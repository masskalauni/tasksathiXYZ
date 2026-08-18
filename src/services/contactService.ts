import { ContactRequest, ContactResponse } from '@/src/types';

export interface ContactService {
  submitContact(data: ContactRequest): Promise<ContactResponse>;
}

export class MockContactService implements ContactService {
  async submitContact(data: ContactRequest): Promise<ContactResponse> {
    // Simulate slight network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic runtime check
    if (!data.name || !data.email || !data.message) {
      throw new Error('Please fill in all required fields (Name, Email, Message).');
    }

    const inquiryId = `TS-CNT-${Date.now().toString().slice(-6)}`;
    
    // In local development / preview, we return a success response
    return {
      success: true,
      inquiryId,
      message: `Thank you, ${data.name}! We have received your inquiry. Our engineering team in Putalisadak, Kathmandu will reach out to you within 24 hours.`,
    };
  }
}

// Export singleton instance (ready to be swapped with ApiContactService later)
export const contactService: ContactService = new MockContactService();
