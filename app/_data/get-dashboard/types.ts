import { TransactionCategory, TransactionType } from "@prisma/client";

export interface TransactionPercentagePerType {
  [key in TransactionType]: number;
}

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
