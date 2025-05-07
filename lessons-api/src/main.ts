import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // Habilitar CORS
 app.enableCors({
  origin: 'http://localhost:3001',
  methods: 'GET', 
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true, 
});

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
