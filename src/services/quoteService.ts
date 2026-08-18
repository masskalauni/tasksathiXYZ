import { QuoteRequest, QuoteResponse, QuoteRequestSubmission } from '@/src/types';

export interface QuoteService {
  submitQuote(data: QuoteRequest): Promise<QuoteResponse>;
  submitQuoteRequest(data: QuoteRequestSubmission): Promise<QuoteResponse>;
}

export class MockQuoteService implements QuoteService {
  async submitQuote(data: QuoteRequest): Promise<QuoteResponse> {
    // Simulate slight network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Basic runtime check
    if (!data.name || !data.email || !data.phone || !data.serviceType || !data.mainProblem) {
      throw new Error('Please complete the required fields in all steps before submitting.');
    }

    const quoteId = `TS-QTE-${Date.now().toString().slice(-6)}`;

    return {
      success: true,
      quoteId,
      message: `Your project scoping request (${quoteId}) has been successfully submitted. Our senior solutions architect in Putalisadak will review your requirements and prepare a detailed preliminary breakdown.`,
    };
  }

  async submitQuoteRequest(data: QuoteRequestSubmission): Promise<QuoteResponse> {
    // Simulate slight network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!data.fullName || !data.email || !data.phone || !data.description) {
      throw new Error('Please complete the required fields before submitting.');
    }

    const quoteId = `TS-QTE-${Date.now().toString().slice(-6)}`;

    return {
      success: true,
      quoteId,
      message: `Your project scoping request (${quoteId}) has been successfully submitted. Our senior solutions architect in Putalisadak will review your requirements and prepare a detailed preliminary breakdown.`,
    };
  }
}

// Export singleton instance (ready to be swapped with ApiQuoteService later)
export const quoteService: QuoteService = new MockQuoteService();
