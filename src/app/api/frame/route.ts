import { NextRequest, NextResponse } from 'next/server';
import { getFrameValidatedMessage } from '@coinbase/onchainkit';
import { JOB_TAB_PARAMS_SET, JobTabParamsText } from '~/core/constants';

export const dynamic = 'force-dynamic';

const FE_URL = process.env.FE_URL;

async function getResponse(req: NextRequest): Promise<NextResponse> {
  try {
    const tab = req.nextUrl.searchParams.get('tab') as JobTabParamsText | null;
    if (!tab) throw new Error('"tab" param is required');

    const isInTabSet = JOB_TAB_PARAMS_SET.has(tab);
    if (!isInTabSet) throw new Error(`Invalid tab "${tab}"`);

    const id = req.nextUrl.searchParams.get('id');
    if (!id) throw new Error('"id" param is required');

    const body = await req.json();
    const validatedMessage = await getFrameValidatedMessage(body);

    if (validatedMessage) {
      console.log({ id, tab, validatedMessage });

      // Redirect to page w/ frame metadata
      const url = `${FE_URL}/jobs/${id}/${tab}`;
      return NextResponse.redirect(url);
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
