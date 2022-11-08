import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('posts')
  async createPost(
    @Body() postData: { title: string; content?: string; published?: boolean },
  ): Promise<PostModel> {
    return this.postService.createPost(postData);
  }

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Post('post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return await this.postService.posts({
      orderBy: { id: 'asc' },
    });
  }
}
