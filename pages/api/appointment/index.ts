import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { IAppointment } from 'lib/type/appointment';
import { ZAppointment } from 'lib/validate/appointment';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqData: IAppointment = req.body || undefined;

  if (req.method === 'GET' && reqData === undefined) {
    handleGetAll(res);
  } else if (req.method === 'GET') {
    handleGet(reqData.phone, res);
  } else if (req.method === 'POST') {
    handlePost(reqData, res);
  } else {
    res.status(404).json('No route found');
  }
}

async function handleGetAll(res: NextApiResponse) {
  try {
    const appointment = await prisma.appointment.findMany();

    res.status(200).json({ success: true, message: appointment });
  } catch (err) {
    res.status(500).json({ success: false, message: 'enternal server error' });
  }
}

async function handleGet(phone: any, res: NextApiResponse) {
  const validResult = ZAppointment.partial().safeParse({ phone: phone });

  if (validResult.success) {
    const appointment = await prisma.appointment.findMany({
      where: {
        phone: validResult.data.phone,
      },
    });
    appointment.length > 0
      ? res.status(200).json({ success: true, message: appointment })
      : res
          .status(500)
          .json({ success: false, message: 'appointment not found' });
  } else {
    res.status(500).json({ success: false, message: validResult.error });
  }
}

async function handlePost(reqData: any, res: NextApiResponse) {
  const validResult = ZAppointment.safeParse(reqData);

  if (validResult.success) {
    const appointment = await prisma.appointment.create({
      data: validResult.data,
    });

    res.status(200).json({ success: true, message: appointment });
  } else {
    res.status(500).json({ success: false, message: validResult.error });
  }
}
