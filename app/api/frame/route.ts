import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const images = [
  ${NEXT_PUBLIC_URL}/random-image1.png,
  ${NEXT_PUBLIC_URL}/random-image2.png,
  ${NEXT_PUBLIC_URL}/random-image3.png,
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  return new NextResponse(
  getFrameHtmlResponse({
  image: {
  src: randomImage,
  },
  buttons: [
  {
  label: 'Show Another Image',
  action: 'post',
  },
  ],
  }),
  );
  }

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
