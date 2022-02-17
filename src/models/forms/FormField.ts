import { ChangeEvent } from "react";

export type FormField = {
  field: string;
  type: string;
  value: string | number | Date | undefined;
  change: (e: ChangeEvent<HTMLInputElement>) => void
}
