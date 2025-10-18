import type { FastifyInstance } from "fastify";
import Controller from "./routes/controller";
import type { Config } from ".";

export async function registerRoutes(config: Config, app: FastifyInstance) {
    console.log(Controller)
    await app.register(Controller, { prefix: 'test' })
}