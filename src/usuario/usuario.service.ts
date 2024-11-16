import { Injectable } from '@nestjs/common';
import { CreateUsuarioDTO } from './dto/CreateusuarioDTO';
import { UpdateUsuarioDTO } from './dto/UpdateUsuarioDTO';
import { PrismaService } from 'src/repository/prisma.service';

@Injectable()
export class UsuarioService {

   constructor( private readonly prisma : PrismaService){}

   async listAll() {
    return await this.prisma.user.findMany();
  }  

  async createUsuario(payload: CreateUsuarioDTO) {
    await this.prisma.user.create({
        data: {
            name : payload.name,
            email: payload.email,
            age: payload.age
        }
    }) 
    return 'Criando Usuário';
  }

  async updateUsuario(id: string, body: UpdateUsuarioDTO) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExist) {
      return 'Usuário não existe';
    }

    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });

    return 'Usuário atualizado com sucesso';
  }

}