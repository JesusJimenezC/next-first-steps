import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page from next app as project to study',
  keywords: ['next', 'app', 'about'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
