export interface CommodityOrder {
  order_date: string; // ISO date-time string
  commodity: string;
  action: 'Buy' | 'Sell';
  quantity: number;
  price: number;
  fund_name: 'Fund I' | 'Fund II' | 'Fund III';
}
