import { ReactNode } from "react";

export interface IDataCard {
  id: string;
  title: string;
  tag: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface IDataFormCreateTask {
  title: string;
  tag: string;
}

export interface IDataFormUpdateTask {
  id: string;
  title: string;
  tag: string;
}

export interface IDataUpdateCheckTask {
  is_active: boolean;
}

export interface IButton {
  title: string;
  quant: number;
}

export interface IModalBase {
  children: ReactNode;
  state: boolean;
  setState: Function;
}
