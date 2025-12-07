export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

export const contactService = {
  // Submit contact form
  submitContactForm: async (data: ContactFormData): Promise<ContactResponse> => {
    try {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: "Your message has been received. We'll get back to you soon!",
            timestamp: new Date().toISOString()
          });
        }, 1000);
      });
    } catch (error) {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
        timestamp: new Date().toISOString()
      };
    }
  },

  // Validate email
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone (basic)
  validatePhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{7,}$/;
    return phoneRegex.test(phone);
  }
};
