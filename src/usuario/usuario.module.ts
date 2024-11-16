import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  controllers : [UsuarioController],
  providers : [UsuarioService],
  exports: [UsuarioService],
  imports:[RepositoryModule]
})
export class UsuarioModule {}
