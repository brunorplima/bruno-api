import { NextApiRequest, NextApiResponse } from "next";
import { find, propEq } from "ramda";
import { costCodes } from '../data.json'


export default function (req: NextApiRequest, res: NextApiResponse) {
   const { id } = req.query
   const vendor = find(propEq('id', Number(id)))(costCodes)
   res.status(200).json(vendor)
}