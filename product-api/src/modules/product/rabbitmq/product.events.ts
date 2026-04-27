export interface ProductCreatedEvent {
  event: 'product.created';
  productId: string;
  supplierId: string;
}