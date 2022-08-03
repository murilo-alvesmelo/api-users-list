import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserInterface } from './entity/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: UserInterface){
    return this.usersService.create(user)
  }

  @Get()
  findAll(){
      return this.usersService.findAll()
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: UserInterface){
    return this.usersService.update(id, user)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.usersService.delete(id)
  }

}
