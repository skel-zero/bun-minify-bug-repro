import type { FastifyPluginCallback } from "fastify"

export default (function Controller(fastify, _opts, done) {
  fastify.get('/',  async (request, reply) => {
    return 'Fastify in bun!'
  })

  done()
} as FastifyPluginCallback)
