import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


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
  create(@Body() createCourseDto: CreateCourseDto) {
    this.coursesService.create(createCourseDto)
  }

  @Put(':id')
  update(@Body() updateCourseDto: UpdateCourseDto, @Param() params) {
   this.coursesService.update(updateCourseDto, params)
  }

  @Delete(':id')
  delete( @Param() param) {
    this.coursesService.delete(param)
  }
}
