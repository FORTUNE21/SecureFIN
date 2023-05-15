import { ReactNode } from "react";

export interface UiProps {
  children: ReactNode;
  className?: string;
}
 export type AccordionData = {
  title: string;
  content: ReactNode;
 }
