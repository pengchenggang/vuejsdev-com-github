# NestJS 学习内容
> NestJS 学习总结

## Step. 1: 全局安装包
```
pnpm add -g @nestjs/cli nodemon ts-node
nest new nestjs-api
```

## Step. 2: 安装相关依赖
```
pnpm add prisma-binding @prisma/client mockjs @nestjs/config class-validator class-transformer argon2 @nestjs/passport passport passport-local @nestjs/jwt passport-jwt lodash multer dayjs express redis @nestjs/throttler

pnpm add -D prisma typescript @types/node @types/mockjs @nestjs/mapped-types @types/passport-local @types/passport-jwt @types/express @types/lodash @types/multer @types/node
```

## Step. 3: prettierrc 配置文件
```json
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "proseWrap": "never",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "singleAttributePerLine": false
}
```

## Step. 4: package.json 修改
```
-"start:dev": "nest start --watch",
+"dev": "nest start --watch",
```
* 这样就能用快捷命令 `d`
* `http://localhost:3000`

## Step. 5: nest-cli.json 修改
```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "generateOptions": {
    "spec": false
  }
}
```
* 使用命令 `nest g res article`
* 或者用简写 `n g res article` (需配置快捷命令)
* `http://localhost:3000/article`
* 一个新接口就写好了 rest 方式

## Step. 6: 数据库连接
```
npx prisma init
```
- 会创建`.env`文件与`prisma`文件夹
* `.env` 修改数据库连接
```
DATABASE_URL="mysql://root:admin888@127.0.0.1:3306/nest"
``` 

## Step. 7: 定义数据库结构
* `npx prisma db pull` 这条命令可以按照数据库生成schema.prisma文件
* 下面我们按照写配置文件 生成数据的方式进行
* `prisman/schema.prisma`
```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // 这里改成mysql了
  url      = env("DATABASE_URL")
}

model article {
  id         Int      @id @default(autoincrement()) @db.UnsignedInt()
  title      String
  content    String   @db.Text()
}

```
* prisma 插件记得装一下，就有颜色提示了

## Step. 8: 生成迁移
```
npx prisma migrate dev
```
* 根据定义生成迁移文件
* 执行新的迁移文件修改数据表
* 生成 Prisma Client

## Step. 9: 重置数据库
```
npx prisma migrate reset
```
* 删除数据库
* 创建同名数据库
* 执行所有迁移文件
* 运行 seed 数据填充

## Step. 10: 数据填充
> 首先在package.json中定义命令，后面可以调用 `npx prisma db seed` 命令实现填充
```json
{
  "name": "nest",
  ...
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
  "scripts": {
  ...
  }
}
```
* 新建 `prisma/seed.ts`
```ts
import { PrismaClient } from '@prisma/client'
import { Random } from 'mockjs'
const prisma = new PrismaClient()
async function run() {
  for (let i = 1; i <= 5; i++) {
    await prisma.article.create({
      data: {
        title: Random.ctitle(3, 6),
        content:Random.cparagraph(30, 50),
      },
    })
  }
}

run()
```
* 执行 `npx prisma db seed` 填充数据

## Step. 11: eslint 一个内联报错
> Delete `␍`eslintprettier/prettier
* 原因就是 win/apple/linux 系统的回车 有的是 `\r` 有的是 `\n` 有的是 `\n\r` 导致的
* 解决方案
```js
// .eslintrc.js
rules: {
  "endOfLine":"auto",
},
```
* ctrl+shift+P reload 一下即可
* [Delete `␍`eslintprettier/prettier](https://blog.csdn.net/weixin_42349568/article/details/115538848)
* [解决VSCode Delete `␍`eslint(prettier/prettier)错误](https://blog.csdn.net/weixin_42752574/article/details/114055598)
* [Delete `␍`eslint(prettier/prettier) 错误的解决方案](https://segmentfault.com/a/1190000021803437)

## Step. 12: 添加prisma数据库读取工具包
> 全局的一个数据库读取工具包
```
n g mo prisma
n g s prisma
```
* 代码
```ts
// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

* 代码
```ts
// src/prisma/prisma.service.ts
import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: ['query'],
    });
  }
}
```

## Step. 12: 添加 DTO 数据格式
> ts 最大的特点就是要有type，所以对于article来说，就要有它对应的DTO
* 数据传输对象（DTO）(Data Transfer Object)，这个就是入参的类型
* model 就是数据模型，对应数据库字段 大概这意思
```ts
// src\article\dto\create-article.dto.ts
export class CreateArticleDto {
  title: string
  content: string
}
```
* 验证一般都放在DTO这里进行验证

## Step. 13: 添加控制器-路由设置
> 先在控制器添加上路由先能访问
```ts
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  // @Post('findAll')
  @Get('findAll')
  findAll() {
    return this.articleService.findAll()
  }

  @Post('findOne')
  findOne(@Body() dto: UpdateArticleDto) {
    console.info('findOne dto', dto)
    return this.articleService.findOne(dto)
  }
  
}
```

## Step. 14: 添加控制器的服务Servce
> 控制器调用服务，服务里面写相关数据的内容
```ts
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article'
  }

  // findAll() {
  //   return `This action returns all article`
  // }
  async findAll() {
    const articles = await this.prisma.article.findMany()
    return {
      data: articles,
    }
  }

  async findOne(dto: UpdateArticleDto) {
    // return `This action returns a #${dto.id} article`
    const article = await this.prisma.article.findMany({
      where: {
        id: +dto.id,
      }
    })
    return {
      data: article
    }
  }
}
```
...