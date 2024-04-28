import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';


const images = [
  `${NEXT_PUBLIC_URL}/8m3xue.jpg`,
  `${NEXT_PUBLIC_URL}/8m5f6t.jpg`,
  `${NEXT_PUBLIC_URL}/8mittd.jpg`,
];
async function getResponse(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    if (body.action === 'new_image') {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    return new NextResponse(JSON.stringify({ imageUrl: selectedImage }), {
    status: 200,
    headers: {
    'Content-Type': 'application/json'
    }
    });
    } else {
    return new NextResponse('Invalid action', { status: 400 });
    }
    } catch (e) {
    console.error('Error handling request:', e);
    return new NextResponse('Internal Server Error', { status: 500 });
    }
    }


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
