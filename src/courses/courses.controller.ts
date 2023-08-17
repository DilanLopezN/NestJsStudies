import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  constructor(private readonly coursesService: CoursesController) {}

  @Get()
  findAll() {
    return this.coursesService.findAll()
  }

  @Get(':id') 
  findOne(
    @Param('id') id: string
  ) {
    return this.coursesService.findOne(id)
  }

  @Post()
  create(@Body() body) {
    this.coursesService.create(body)
  }

  @Put(':id')
  update(@Body() body, @Param() params) {
   this.coursesService.update(body, params)
  }

  @Delete(':id')
  delete( @Param() param) {
    this.coursesService.delete(param)
  }
}
