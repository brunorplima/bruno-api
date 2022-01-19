import { NextApiRequest, NextApiResponse } from "next";
import { dailyCosts } from '../data.json'


export default function (req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(dailyCosts)
}