import type { NextApiRequest, NextApiResponse } from 'next';
import { ZAppointment } from 'lib/validate/appointment';
import prisma from 'lib/prisma';
import { Appointment } from '@prisma/client';
import { IAppointment } from 'lib/type/appointment';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqData: IAppointment = req.body || undefined;
  const hasKeyInReqData = reqData !== undefined ? 'key' in reqData : false;

  if (req.method === 'GET' && !hasKeyInReqData) {
    handleGet(res);
  } else if (req.method === 'GET' && hasKeyInReqData) {
    handleGetAppointment(reqData.phone, res);
  } else if (req.method === 'POST') {
    handlePost(reqData, res);
  } else {
    res.json('route not found');
  }
}

const handleGet = async (res: NextApiResponse) => {
  const appointment = await prisma.appointment.findMany();

  res.status(200).json(appointment);
};

async function handleGetAppointment(_key: any, res: NextApiResponse) {
  const appointment = await prisma.appointment.findMany({
    where: {
      key: _key,
    },
  });

  res.status(200).json(appointment);
}

const handlePost = async (reqData: any, res: NextApiResponse) => {
  try {
    const validAppointmentData = ZAppointment.parse(reqData); 

    const result = await prisma.appointment.create({ data: validAppointmentData});

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
