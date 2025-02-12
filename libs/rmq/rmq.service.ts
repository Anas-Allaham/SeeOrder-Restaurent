import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
	constructor(private readonly configService: ConfigService) {}

	getOptions(queue: string, noAck = false): RmqOptions {
		return {
			transport: Transport.RMQ,
			options: {
				urls: [this.configService.get<string>('RABBIT_MQ_URI_TYPEORM')],
				queue: queue.toLowerCase(),
				noAck,
				persistent: true,
			},
		};
	}

	ack(context: RmqContext) {
		const channel = context.getChannelRef();
		const originalMessage = context.getMessage();
		channel.ack(originalMessage);
	}
}

//https://gitlab.com/team-backend2/adminpanel-backend-micro-services/-/commit/2b62c25bb204b4b2181fe73e96beaf044f47a098