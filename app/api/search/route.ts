import prisma from "@/app/libs/prismadb";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { query } = req.query;

   // Break up the query into an array of words
   const keys = (query as string).split(/\s+/); // Split by spaces, also handles multiple spaces

   try {
     // Use Prisma's OR operator to search for listings that contain any of the words
     const listings = await prisma.listing.findMany({
      where: {
        OR: keys.map(keyword => ({
            keywords: {
                has: keyword,
            },
        })),
    }
     });
     console.log(listings);
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch listings' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}