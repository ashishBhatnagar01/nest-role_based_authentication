import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from '../utils/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
