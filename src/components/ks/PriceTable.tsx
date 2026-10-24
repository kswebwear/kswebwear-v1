import Button from "./Button";

interface PriceRow {
  qty: string;
  oneSide: string;
  bothSides: string;
}

interface PriceTableProps {
  rows: PriceRow[];
  bulkLabel: string;
  bulkHref: string;
}

const cell = "px-3 py-5 md:px-7 md:py-6 border-b border-ks-line";
const head = "ks-label px-3 py-4 md:px-7 font-medium text-ks-muted border-b border-ks-line text-left";

export default function PriceTable({ rows, bulkLabel, bulkHref }: PriceTableProps) {
  return (
    <div className="overflow-x-auto border border-ks-line bg-ks-paper">
      <table className="w-full border-collapse text-ks-body">
        <caption className="sr-only">Price per shirt by quantity</caption>
        <thead>
          <tr>
            <th scope="col" className={head}>Quantity</th>
            <th scope="col" className={head}>Front or back</th>
            <th scope="col" className={head}>Front and back</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.qty}>
              <th scope="row" className={`${cell} text-left font-semibold`}>{row.qty}</th>
              <td className={`${cell} ks-title text-xl md:text-2xl`}>{row.oneSide}</td>
              <td className={`${cell} ks-title text-xl md:text-2xl`}>{row.bothSides}</td>
            </tr>
          ))}
          <tr>
            <th scope="row" className="px-3 py-5 text-left font-semibold md:px-7 md:py-6">10+ shirts</th>
            <td colSpan={2} className="px-3 py-3 md:px-7">
              <Button variant="link" href={bulkHref}>{bulkLabel}</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
