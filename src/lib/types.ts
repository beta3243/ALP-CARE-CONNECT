export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot?: string; // Anti-spam honeypot field
}

export interface EnquiryActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  submittedData?: Partial<EnquiryFormData>;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  features: string[];
  disclaimer?: string;
  visualType?: 'house' | 'wrench' | 'heart' | 'building' | 'inspection';
}
