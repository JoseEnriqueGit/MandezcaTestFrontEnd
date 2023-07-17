interface IInputProps {
	label: string;
	type: string;
	id?: string;
	name?: string;
	autoComplete?: string;
	disabled?: boolean;
	focus?: boolean;
	defaultValue?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min?: number;
}

const Input = (props: IInputProps) => {
	return (
		<label className="flex flex-col gap-1 max-w-full font-semibold">
			{props.label}
			<input
				className="p-2 h-10 rounded-sm font-medium bg-blue-200"
				type={props.type}
				id={props.id}
				name={props.name}
				autoComplete={props.autoComplete}
				disabled={props.disabled}
				autoFocus={props.focus}
				// defaultValue={props.defaultValue || ""}
				value={props.value || ""}
				onChange={props.onChange}
				min={props.min}
				required
			/>
		</label>
	);
};

export default Input;
