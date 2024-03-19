import { Dispatch, SetStateAction } from 'react';

export interface ICreatePowstContext {
  setActiveStep: Dispatch<SetStateAction<number>>;
  savePowstInLocal: Dispatch<SetStateAction<Partial<ICreatePowst>>>;
  clearPowstInLocal: () => void;
  localPowst: ICreatePowst;
}

export interface ICreatePowstBasicForm {
  title: string;
  live: string;
  source: string;
}

export interface ICreatePowstDescriptionForm {
  description: string;
  keywords: { text: string }[];
}

export interface ICreatePowstTechForm {
  tech: string;
}

export interface ICreatePowstImageForm {
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export interface ICreatePowst
  extends ICreatePowstBasicForm,
    ICreatePowstDescriptionForm,
    ICreatePowstTechForm,
    ICreatePowstImageForm {
  _id: string;
  techStack: { name: string; version: string }[];
  owner: string;
}

export interface ICreatePowstBody {
  title: string;
  description: string;
  live?: string;
  source?: string;
  techStack: { name: string; version: string }[];
  image: File;
  imageAlt?: string;
  owner: string;
  keywords: string[];
}
