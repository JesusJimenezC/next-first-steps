import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact page from next app as project to study',
  keywords: ['next', 'app', 'contact'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
