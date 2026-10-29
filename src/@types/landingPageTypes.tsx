export interface ButtonType {
  label: string;
  link: string;
}

export interface ReviewType {
  name: string;
  review: string;
  // where the review was left, e.g. "Google", "Airbnb", "Booking.com"
  source?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
