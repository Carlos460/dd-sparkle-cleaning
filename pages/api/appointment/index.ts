import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

interface AppointmentData {
  key: String;
  client: String;
  location: String;
  date: String;
  time: String;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqData: AppointmentData = req.body || undefined;
  const hasKeyInReqData = reqData !== undefined ? 'key' in reqData : false;

  if (req.method === 'GET' && !hasKeyInReqData) {
    handleGet(res);
  } else if (req.method === 'GET' && hasKeyInReqData) {
    handleGetAppointment(reqData.key, res);
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
  const { key, client, location, date, time } = reqData;

  const result = await prisma.appointment.create({
    data: {
      key: key,
      client: client,
      location: location,
      date: date,
      time: time,
    },
  });

  res.status(200).json(result);
};
