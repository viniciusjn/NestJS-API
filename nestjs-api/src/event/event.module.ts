import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepository } from './repositories/create-event.repository';
import { CreateEventService } from './services/create-event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './Schema/events.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
  controllers: [EventController],
  providers: [CreateEventRepository, CreateEventService],
  exports: [CreateEventRepository, CreateEventService],
})
export class EventModule {}
