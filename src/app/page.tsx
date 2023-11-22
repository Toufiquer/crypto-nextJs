import Image from "next/image";
import { DataTable } from "./table-row/data-table";
import { DataTableDemo } from "./bitcoin/data-table";
import { columns } from "./table-row/columns";
import { payments } from "./table-row/data";
import { columns as btcColumns } from "./bitcoin/columns";
import { btcData } from "./bitcoin/data";
btcData.length = 20;
export default function Home() {
  return (
    <div className="flex p-4 w-full min-h-screen items-center justify-center bg-slate-700 flex-col text-white">
      <DataTableDemo data={btcData} columns={btcColumns} />
    </div>
  );
}
