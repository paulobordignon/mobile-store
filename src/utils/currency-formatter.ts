import 'intl';
import 'intl/locale-data/jsonp/pt';

export const currencyFormatter = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
