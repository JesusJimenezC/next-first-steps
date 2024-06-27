import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing page from next app as project to study',
  keywords: ['next', 'app', 'pricing'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
