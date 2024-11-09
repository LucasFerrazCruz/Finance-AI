import { TransactionType } from "@prisma/client";

export interface TransactionPercentagePerType {
  [key in TransactionType]: number;
}
