import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepository } from './repositories/create-event.repository';
import { CreateEventService } from './services/create-event.service';

@Module({
  controllers: [EventController],
  providers: [CreateEventRepository, CreateEventRepository],
  exports: [CreateEventRepository, CreateEventService],
})
export class EventModule {}
