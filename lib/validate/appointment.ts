import { message } from 'antd';
import z from 'zod';

export const ZAppointment = z.object({
  phone: z.string().length(10, {
    message: 'phone number must contain 10 numeric characters',
  }),
  email: z.string().email(),
  firstName: z.string().min(1).max(25),
  lastName: z.string().min(1).max(25),
  street: z.string().min(1).max(25),
  city: z.string().min(1).max(25),
  state: z.string().length(2),
  zip: z.string().min(5).max(9),
  dateTime: z.string(),
});
