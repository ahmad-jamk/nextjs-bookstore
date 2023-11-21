import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const {
      title,
      author,
      number,
      year,
      ISBN,
      description,
      thumbnailUrl,
      fileUrl,
      pages,
      category,
      language,
    } = req.body;

    const newBook = await prismadb.book.create({
      data: {
        title,
        author,
        number,
        year,
        ISBN,
        description,
        thumbnailUrl,
        fileUrl,
        pages,
        category,
        language,
      },
    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.error({ error });
    return res.status(500).end();
  }
}
