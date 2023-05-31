import { authOptions } from './auth/[...nextauth]'
import { createSite, deleteSite, getSite, updateSite } from 'lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import { HttpMethod } from 'types'

export default async function site(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) return res.status(401).end()

  switch (req.method) {
    case HttpMethod.GET:
      return getSite(req, res, session)
    case HttpMethod.POST:
      return createSite(req, res)
    case HttpMethod.DELETE:
      return deleteSite(req, res)
    case HttpMethod.PUT:
      return updateSite(req, res)
    default:
      res.setHeader('Allow', [
        HttpMethod.GET,
        HttpMethod.POST,
        HttpMethod.DELETE,
        HttpMethod.PUT,
      ])
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
