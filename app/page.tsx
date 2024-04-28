import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Show me Purpleman',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/public/park-3.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Arfchancellor',
  description: 'ARF',
  openGraph: {
    title: 'Arfchancellor',
    description: 'Arf',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>We want Purpleman.xyz</h1>
    </>
  );
}
