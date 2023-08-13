import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Todos cursos'
  }

  @Get(':id') 
  findOne(
    @Param() params
  ) {
    return `Retornando curso ${params.id}` 
  }

  @Post()
  create(@Body() body) {
    return body
  }
}
