import { useState } from 'react';
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const images = [
  `${NEXT_PUBLIC_URL}/8nu7so.jpg`,
  `${NEXT_PUBLIC_URL}/8npha5.jpg`,
  `${NEXT_PUBLIC_URL}/8nh1ya.jpg`,
];

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Show Purpleman Fact',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/baseimage.jpeg`,
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
      <h1>zizzamia.xyz</h1>
    </>
  );
}
