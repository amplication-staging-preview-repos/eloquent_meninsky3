import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { grpcClientOptions } from "./grpc.client.options";
import { generateClientOptions } from "./mqtt/generateClientOptions";
import { MicroserviceOptions } from "@nestjs/microservices";

export async function connectMicroservices(app: INestApplication) {
  const configService = app.get(ConfigService);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  app.connectMicroservice<MicroserviceOptions>(generateClientOptions(configService));
}
