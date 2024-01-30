import { NextRequest, NextResponse } from 'next/server';
import { getFrameValidatedMessage } from '@coinbase/onchainkit';

export const dynamic = 'force-dynamic';

const FE_URL = process.env.FE_URL;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  console.log({ headers: req.headers });

  try {
    const body = await req.json();
    // const validatedMessage = await getFrameValidatedMessage(body);
    // if (validatedMessage) {
    // Do something with validated message
    // }

    const unsignedBody = body as UnsignedPostFrameBody;
    console.log(JSON.stringify({ unsignedBody: body }));

    return NextResponse.json({ message: 'OK' });
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

interface UnsignedPostFrameBody {
  untrustedData: {
    fid: number;
    buttonIndex: number;
    castId: {
      fid: number;
      hash: string;
    };
  };
}
