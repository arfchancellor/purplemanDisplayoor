import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Show Random Image',
      action: 'post',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/initial-image.png`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'Random Image Frame',
  description: 'Click to see a random image',
  openGraph: {
    title: 'Random Image Frame',
    description: 'Explore random images by clicking the button',
    images: [`${NEXT_PUBLIC_URL}/initial-image.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Random Image Frame</h1>
    </>
  );
}
