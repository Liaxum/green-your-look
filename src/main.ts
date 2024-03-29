import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

	const app = await NestFactory.create(AppModule);

	app.enableCors({
		'origin': ['https://liaxum.github.io', 'http://localhost:8080', 'http://liaxum.fr'],
		'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		'allowedHeaders': 'Authorization, Content-Type, Accept',
		'credentials': true,
	});

	app.useGlobalPipes(new ValidationPipe);

	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

	const config = new DocumentBuilder()
		.setTitle('Green Your Look api')
		.setDescription('The Green Your Look API documentation')
		.setVersion('1.0.0')
		.addTag('greenYourLook')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api/doc', app, document);

	app.setGlobalPrefix('api');

	await app.listen(8542);
}
bootstrap();
