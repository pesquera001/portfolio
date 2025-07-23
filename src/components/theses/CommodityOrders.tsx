import { useState } from 'react';
import type { CommodityOrder } from '../../entities/CommodityOrder';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
// Table UI components would be custom or from a UI lib; for now, use basic table
import { ArrowDown, ArrowUp } from 'lucide-react';

const demoOrders: CommodityOrder[] = [
  {
    order_date: '2024-04-10T00:00:00Z',
    commodity: 'Gold',
    action: 'Buy',
    quantity: 100,
    price: 2345.67,
    fund_name: 'Fund I',
  },
  {
    order_date: '2024-03-22T00:00:00Z',
    commodity: 'Oil',
    action: 'Sell',
    quantity: 500,
    price: 78.12,
    fund_name: 'Fund I',
  },
  {
    order_date: '2024-02-15T00:00:00Z',
    commodity: 'Wheat',
    action: 'Buy',
    quantity: 2000,
    price: 6.45,
    fund_name: 'Fund I',
  },
];

export default function CommodityOrders({ fundName }: { fundName: string }) {
  const [orders] = useState(demoOrders.filter(o => o.fund_name === fundName));

  if (orders.length === 0) return <div className="text-center p-8 text-steel-gray/80">No order history found for this fund.</div>;

  return (
    <>
      <h3 className="text-xl font-normal mb-4 font-sans">Commodity Order History</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-card-navy border border-border-gray overflow-hidden"
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-deep-navy-blue">
              <th className="font-normal text-steel-gray px-4 py-2 text-left">Date</th>
              <th className="font-normal text-steel-gray px-4 py-2 text-left">Commodity</th>
              <th className="font-normal text-steel-gray px-4 py-2 text-left">Action</th>
              <th className="font-normal text-steel-gray px-4 py-2 text-right">Quantity</th>
              <th className="font-normal text-steel-gray px-4 py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="text-white border-t border-border-gray">
                <td className="px-4 py-2">{format(new Date(order.order_date), 'yyyy-MM-dd')}</td>
                <td className="px-4 py-2 font-medium">{order.commodity}</td>
                <td className="px-4 py-2">
                  <span className={`flex items-center gap-1 font-semibold ${order.action === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                    {order.action === 'Buy' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {order.action}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">{order.quantity.toLocaleString()}</td>
                <td className="px-4 py-2 text-right font-mono text-xs">${order.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
}
