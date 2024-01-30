import { NextRequest, NextResponse } from 'next/server';
import { getFrameValidatedMessage } from '@coinbase/onchainkit';

export const dynamic = 'force-dynamic';

const FE_URL = process.env.FE_URL;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const validatedMessage = await getFrameValidatedMessage(body);

    if (validatedMessage) {
      console.log(JSON.stringify({ validatedMessage }));

      // // Redirect to page w/ frame metadata
      // const url = `${FE_URL}/jobs/${id}/${tab}`;
      // return NextResponse.redirect(url);

      return NextResponse.json({ message: 'OK' });
    }

    throw new Error('Invalid frame message');
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({
      message: (error as Error).message ?? 'Something went wrong :(',
    });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}
