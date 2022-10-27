import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import OrmConfig from '../../mikro-orm.config';

import { User} from '../../entities';
@Module({
  imports: [
    MikroOrmModule.forRoot(OrmConfig),
    MikroOrmModule.forFeature({
      entities: [User],
    }),
  ],
  exports: [MikroOrmModule],
})

export class OrmModule {}