import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/prismadb';

interface IParams {
  listingId?: string;
}

export async function POST(
  request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  const { rating, comment } = await request.json();

  if (!rating || !comment) {
    throw new Error('Missing required fields');
  }

  try {
    const review = await prisma.review.create({
      data: {
        rating: Number(rating),
        comment: comment,
        userId: currentUser.id,
        listingId: listingId,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Review not created' });
  }

}
