/**
 * Utility functions for styling and classes
 */

export function cn(...classes: (string | boolean | undefined | null | { [key: string]: boolean })[]): string {
  const result: string[] = [];

  for (const item of classes) {
    if (!item) continue;
    if (typeof item === 'string') {
      result.push(item);
    } else if (typeof item === 'object') {
      for (const [key, value] of Object.entries(item)) {
        if (value) result.push(key);
      }
    }
  }

  return result.join(' ');
}

export function formatPhoneNumber(phone: string): string {
  // Format Nepal numbers like 9868509934 -> +977 986-8509934
  if (phone.length === 10) {
    return `+977 ${phone.slice(0, 3)}-${phone.slice(3)}`;
  }
  return phone;
}
