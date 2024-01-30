import { NextRequest, NextResponse } from 'next/server';

import { JOB_TAB_PARAMS_SET, JobTabParamsText } from '~/core/constants';
import { getPostTab } from '~/utils/get-post-tab';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    id?: string;
    tab?: JobTabParamsText;
  };
}

export async function POST(
  req: NextRequest,
  { params }: Props,
): Promise<Response> {
  const { id, tab } = params;

  try {
    if (!id) throw new Error(`job id="${id}" is required`);
    if (!tab) throw new Error(`job tab="${tab}" is required`);
    if (!JOB_TAB_PARAMS_SET.has(tab as any)) {
      throw new Error(`job tab="${tab}" is invalid`);
    }

    const {
      untrustedData: { buttonIndex },
    } = (await req.json()) as UnsignedPostFrameBody;
    // const validatedMessage = await getFrameValidatedMessage(body);
    // if (validatedMessage) {
    // Do something with validated message
    // }

    const postTab = getPostTab(tab, buttonIndex);

    const res = await fetch(`${process.env.FE_URL}/jobs/${id}/${postTab}`);
    const resBody = await res.text();

    return new NextResponse(resBody);
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({
      message: (error as Error).message ?? 'Something went wrong :(',
    });
  }
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
