// import react
import { Dispatch, SetStateAction } from 'react';

export interface ICreatePowstContext {
  setActiveStep: Dispatch<SetStateAction<number>>;
}

export interface ICreatePowstBasicForm {
  name: string;
  live: string;
  source: string;
}

export interface ICreatePowstTechForm {
  tech: string;
}
