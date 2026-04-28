import amqp from 'amqplib';

let connection: Awaited<ReturnType<typeof amqp.connect>>;
let channel: Awaited<ReturnType<typeof connection.createChannel>>;

export async function getChannel() {
  if (!channel) {
    connection = await amqp.connect(process.env.RABBIT_URL!);
    channel = await connection.createChannel();
  }
  return channel;
}

export async function publish(queue: string, message: unknown) {
  const ch = await getChannel();

  await ch.assertQueue(queue, { durable: true });

  ch.sendToQueue(
    queue,
    Buffer.from(JSON.stringify(message)),
    { persistent: true }
  );
}