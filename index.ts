import Fastify from "fastify";
import { registerRoutes } from "./registerRoutes";

export type Config = {
    environment: string;
}

const config: Config = {
    environment: 'development',
}

const app = Fastify();

app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

await registerRoutes(config, app)

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}\n${app.printRoutes()}`);
});
