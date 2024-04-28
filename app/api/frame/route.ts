import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

// Predefined list of images for random display
const images = [
  `${NEXT_PUBLIC_URL}/image1.png`,
  `${NEXT_PUBLIC_URL}/image2.png`,
  `${NEXT_PUBLIC_URL}/image3.png`,
];

async function getResponse(req: NextRequest): Promise<NextResponse> {
const body: FrameRequest = await req.json();
const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

if (!isValid) {
return new NextResponse('Message not valid', { status: 500 });
}

// Generate a random index to select an image
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

// Utilizing getFrameHtmlResponse to generate the HTML response dynamically
return new NextResponse(
  getFrameHtmlResponse({
    buttons: [
      {
        label: 'Show me another image',
        action: 'post_redirect',
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`, // Ensure this loops back to the same API endpoint
      },
    ],
    image: {
      src: randomImage, // Display a random image
      aspectRatio: '1:1',
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame`, // Redirect to self to refresh the image on button click
  }),
);


export async function POST(req: NextRequest): Promise<Response> {
return getResponse(req);
}

export const dynamic = 'force-dynamic';