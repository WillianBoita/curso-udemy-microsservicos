import amqp from 'amqplib';

export async function startProductConsumer() {
  const conn = await amqp.connect(process.env.RABBIT_URL!);
  const ch = await conn.createChannel();

  await ch.assertQueue('product.created', { durable: true });

  ch.consume('product.created', async (msg) => {
    if (!msg) return;

    const data = JSON.parse(msg.content.toString());

    console.log('Evento recebido:', data);

    // exemplo:
    // - notificar supplier
    // - atualizar cache

    ch.ack(msg);
  });
}