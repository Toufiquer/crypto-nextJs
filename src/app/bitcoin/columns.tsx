"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BtcDataType } from "./data";

export const columns: ColumnDef<BtcDataType>[] = [
  {
    accessorKey: "gridFearDate",
    header: "GF Date",
  },
  {
    accessorKey: "gridFearData",
    header: "GF Data",
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
  {
    accessorKey: "BtcDate",
    header: "Btc Date (OCHL)",
  },
];
