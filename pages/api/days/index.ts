import { NextApiRequest, NextApiResponse } from "next";
import { days } from '../data.json'


export default function (req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(days)
}