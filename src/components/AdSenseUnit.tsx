'use client';

import { useEffect } from 'react';
import { useHasAdConsent } from '@/lib/consent';

interface AdSenseUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export function AdSenseUnit({
  slot,
  format = 'auto',
  responsive = true,
  className = ''
}: AdSenseUnitProps) {
  const consented = useHasAdConsent();

  useEffect(() => {
    if (!consented || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('AdSense error:', e);
    }
  }, [consented, slot]);

  // No real slot configured yet, or user hasn't consented to ads — render nothing
  // rather than push an invalid/placeholder ad request.
  if (!slot || !consented) return null;

  return (
    <div className={`my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: format === 'rectangle' ? '250px' : 'auto'
        }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
