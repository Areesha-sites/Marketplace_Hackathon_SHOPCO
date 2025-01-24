"use client"
import { useParams } from 'next/navigation';

export default function LocalePage() {
  const params = useParams();
  const locale = params?.locale || 'en'; // Default to 'en' if null

  return <div>Current Locale: {locale}</div>;
}