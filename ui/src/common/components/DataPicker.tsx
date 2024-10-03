import { addMonths } from 'date-fns';
import 'flatpickr/dist/flatpickr.css';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import Flatpickr from 'react-flatpickr';
import { IProjectFormData } from '../../interfaces/IProjectFormData';


interface DatePickerProps {
	id: string;
	label: string;
	name: string;
	required: boolean;
}
export const DatePicker: React.FC<DatePickerProps> = ({
	id,
	label,
	name,
	required,
}) => {
	const [field] = useField({
		type: 'date',
		name,
		required,
	});
	const { values, setFieldValue } = useFormikContext<IProjectFormData>();
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<Flatpickr
				name={name}
				value={field.value}
				placeholder="yyyy-mm-dd"
				options={{
					minDate: values['starting-date'] ? values['starting-date'] : 'today',
					maxDate: addMonths(new Date(), 6),
				}}
				onChange={(date) =>
					setFieldValue(name, date[0].toISOString().split('T')[0])
				}
				className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-indigo-600 sm:text-sm"
			/>
		</div>
	);
};