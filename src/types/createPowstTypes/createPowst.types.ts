// import react
import { Dispatch, SetStateAction } from 'react';

export interface ICreatePowstContext {
  setActiveStep: Dispatch<SetStateAction<number>>;
  savePowstInLocal: Dispatch<SetStateAction<Partial<IPowst>>>;
  localPowst: IPowst;
}

export interface ICreatePowstBasicForm {
  name: string;
  live?: string;
  source?: string;
}

export interface ICreatePowstTechForm {
  tech: string;
}

export interface ICreatePowstImageForm {
  alt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
}

export interface IPowst
  extends ICreatePowstBasicForm,
    ICreatePowstTechForm,
    ICreatePowstImageForm {
  description: string;
  techStack: { name: string; versions: string }[];
}
