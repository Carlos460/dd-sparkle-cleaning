import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { IAppointment } from 'lib/type/appointment';
import { ZAppointment } from 'lib/validate/appointment';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqData: IAppointment = req.body || undefined;

  if (req.method === 'GET') {
    handleGet(res);
  } else if (req.method === 'POST') {
    handlePost(reqData, res);
  } else {
    res.status(404).json('No route found');
  }
}

async function handleGet(res: NextApiResponse) {
  try {
    const appointment = await prisma.appointment.findMany();

    res.status(200).json({ success: true, message: appointment });
  } catch (err) {
    res.status(500).json({ success: false, message: 'enternal server error' });
  }
}

async function handlePost(reqData: any, res: NextApiResponse) {
  try {
    const validAppointmentData = ZAppointment.parse(reqData);

    const result = await prisma.appointment.create({
      data: validAppointmentData,
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}
