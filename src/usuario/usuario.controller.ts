import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/CreateusuarioDTO';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDTO } from './dto/UpdateUsuarioDTO';

@Controller('usuario')
export class UsuarioController {
    
    constructor(private readonly usuarioService: UsuarioService) {}
    
    @Get()
    listAll() {
      return  this.usuarioService.listAll(); 
    }

    @Post()
    createUser(@Body() body: CreateUsuarioDTO) {
      return this.usuarioService.createUsuario(body); // Chama o método createUsuario do serviço
    }


    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUsuarioDTO) {
    return this.usuarioService.updateUsuario(id, body);
    }

    @Delete()
    deletarUser(){
        return "Excluir Usuário!"
    }

}
