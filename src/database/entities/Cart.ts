import { EntitySchema } from 'typeorm';

const Cart = new EntitySchema({
  name: 'Cart',
  tableName: 'cart',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    product_id: {
      type: 'varchar',
    },
    product_quantity: {
      type: 'int',
    },
  },
});

export default Cart;
