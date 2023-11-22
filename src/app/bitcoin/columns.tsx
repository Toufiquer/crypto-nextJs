"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BtcDataType } from "./data";

export const columns: ColumnDef<BtcDataType>[] = [
  {
    accessorKey: "BtcDate",
    header: "Btc Date (OCHL)",
  },
  {
    accessorKey: "gridFearDate",
    header: "GF Date",
  },
  {
    accessorKey: "gridFearData",
    header: "GF Data",
  },
  {
    accessorKey: "gridFearData",
    header: "Checked",
    cell: (info) => {
      const openPrice = info.row.original.BtcOpen;
      const highPrice = info.row.original.BtcHigh;
      const lowPrice = info.row.original.BtcLow;
      const risk =
        info.row.original.gridFearData > 35
          ? info.row.original.gridFearData
          : 35;
      const riskMax = openPrice + (risk / 100) * info.row.original.BtcOpen;
      const riskMin = openPrice - (risk / 100) * info.row.original.BtcOpen;
      const checked = lowPrice > riskMin && highPrice < riskMax;
      return checked ? (
        <div className="flex items-center justify-center w-12 h-8 rounded bg-green-600">
          Pass
        </div>
      ) : (
        <div className="flex items-center justify-center w-12 h-8 rounded bg-rose-400">
          Fail
        </div>
      );
    },
  },
  {
    accessorKey: "gridFearData",
    header: "Change",
    cell: (info) => {
      const openPrice = info.row.original.BtcOpen;
      const highPrice = info.row.original.BtcHigh;
      const lowPrice = info.row.original.BtcLow;
      const risk =
        info.row.original.gridFearData > 35
          ? info.row.original.gridFearData
          : 35;
      const riskMax = openPrice + (risk / 100) * info.row.original.BtcOpen;
      const riskMin = openPrice - (risk / 100) * info.row.original.BtcOpen;
      const change = Math.ceil(((highPrice - lowPrice) / lowPrice) * 100);
      return change;
    },
  },
  {
    accessorKey: "BtcOpen",
    header: "Open",
  },
  {
    accessorKey: "BtcClose",
    header: "Close",
  },
  {
    accessorKey: "BtcHigh",
    header: "Heigh",
  },
  {
    accessorKey: "BtcLow",
    header: "Low",
  },
  {
    accessorKey: "BtcVolume",
    header: "Volume",
  },
];
