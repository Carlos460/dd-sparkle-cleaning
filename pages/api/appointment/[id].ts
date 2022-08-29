import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query || undefined;
  const data = req.body;

  if (req.method === 'PUT') {
    handlePut(id, data, res);
  } else if (req.method === 'DELETE') {
    handleDelete(id, res);
  } else {
    res.json({ error: 'error interal server' });
  }
}

async function handlePut(_id: any, _data: any, res: NextApiResponse) {
  const result = prisma.appointment.update({
    where: {
      id: _id,
    },
    data: _data,
  });

  res.json(result);

}

async function handleDelete(_id: any, res: NextApiResponse) {
  const result = prisma.appointment.delete({
    where: {
      id: _id,
    },
  });

  res.json(result);
}

