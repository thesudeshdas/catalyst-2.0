/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { LuInfo } from 'react-icons/lu';

import { months, years } from './dateInput.data';

// declare props types
interface IDateInputProps {
  label?: string;
  placeholder?: string;
  tip?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  disabled?: boolean;
  defaultValue?: { month: string; year: string };
  isPresent?: boolean;
  isPresentLabel?: string;
}

export default function DateInput(
  props: IDateInputProps & UseControllerProps<any>
) {
  const {
    field,
    fieldState: { error }
  } = useController(props);

  const [selectedMonth, setSelectedMonth] = useState<string>();
  const [selectedYear, setSelectedYear] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>();

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedMonth(event.target.value);

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedYear(event.target.value);

  const handlePresentToggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedMonth('Present');
      setSelectedYear('Present');
      return setDisabled(true);
    }
    setSelectedMonth('Select Month');
    setSelectedYear('Select Year');
    return setDisabled(false);
  };

  useEffect(() => {
    field.onChange({ month: selectedMonth, year: selectedYear });
  }, [selectedMonth, selectedYear]);

  return (
    <div className='form-control w-full'>
      {(props.label || props.tip) && (
        <div className='flex items-center'>
          {props.label && (
            <div className='label gap-1'>
              <span className='label-text'>{props.label}</span>
              <span className='label-text text-error'>
                {props.required && '*'}
              </span>
            </div>
          )}

          {props.tip && (
            <div
              className='tooltip tooltip-right cursor-pointer'
              data-tip={props.tip}
            >
              <LuInfo className='h-3 w-3' />
            </div>
          )}
        </div>
      )}

      <div className='flex gap-2 w-full'>
        <select
          className='select select-bordered join-item w-full focus:outline-none focus:border-primary text-sm'
          defaultValue={props?.defaultValue?.month}
          onChange={handleMonthChange}
          disabled={disabled}
          value={selectedMonth}
        >
          <option value={'Select Year'}>Select Month</option>

          {months.map(({ label, value }) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>

        <select
          className='select select-bordered join-item w-full focus:outline-none focus:border-primary text-sm'
          defaultValue={props?.defaultValue?.year}
          onChange={handleYearChange}
          disabled={disabled}
          value={selectedYear}
        >
          <option value={'Select Year'}>Select Year</option>

          {years.map(({ label, value }) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
      </div>

      {props?.isPresent && (
        <label className='label cursor-pointer gap-2 justify-start text-sm'>
          <input
            type='checkbox'
            className='checkbox checkbox-primary checkbox-xs'
            onChange={handlePresentToggle}
          />
          {props?.isPresentLabel}
        </label>
      )}

      {error && (
        <div className='label'>
          <span className='label-text-alt text-error font-medium'>
            {error?.message}
          </span>
        </div>
      )}
    </div>
  );
}
