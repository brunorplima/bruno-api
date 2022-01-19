import { NextApiRequest, NextApiResponse } from "next";
import { costCodes } from '../data.json'


export default function (req: NextApiRequest, res: NextApiResponse) {
   res.status(200).json(costCodes)
}