import { PostController } from './posts/post.controller';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { PostService } from './posts/post.service';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductsModule],
  controllers: [
    PostController,
    UserController,
    ProductsController,
    AppController,
  ],
  providers: [
    UserService,
    PostService,
    PrismaService,
    ProductsService,
    AppService,
  ],
})
export class AppModule {}
