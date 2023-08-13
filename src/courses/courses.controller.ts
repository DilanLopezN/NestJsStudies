import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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

  @Put(':id')
  update(@Body() body, @Param() params) {
    return `Atualização do curso ${params.id}`
  }

  @Delete(':id')
  delete( @Param() param) {
    return `Deletado curso ${param.id}`
  }
}
