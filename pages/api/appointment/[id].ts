import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { ZAppointment } from 'lib/validate/appointment';

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
    res.json({ success: false, message: 'route not found' });
  }
}

async function handlePut(id: any, data: any, res: NextApiResponse) {
  const validResult = await ZAppointment.partial().safeParse(data.update);

  if (validResult.success === true) {
    const appointment = await prisma.appointment.update({
      where: {
        id: id,
      },
      data: validResult.data,
    });

    res.json({ success: true, message: appointment });
  } else {
    res.status(400).json({ success: false, message: validResult.error });
  }
}

async function handleDelete(id: any, res: NextApiResponse) {
  try {
    const appointment = await prisma.appointment.delete({
      where: { id: id },
    });

    res.status(200).json({
      sucess: true,
      message: `${appointment.firstName} ${appointment.lastName} was deleted`,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: 'user not found' });
  }
}
