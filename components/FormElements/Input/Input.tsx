interface inputProps {
	type: string
	label: string
	className?: string
	placeholder: string
}

const Input = ({ type, label, className, placeholder, ...restProps }: inputProps ) => {
	return (
		<form className={className}>
			<label className="text-secondary font-bold text-[14px]/[13px] tracking-tight">
				<span className={''}>{label}</span>

				<div className={`flex justify-center items-center flex-col`}>
					<input
						className={`rounded-lg border-[#9a9fbf33] gap-2.5 px-3 py-0 w-[327px] h-[60px] outline-none focus:border-2 focus:border-secondary`}
						type={type}
						placeholder={placeholder}
						{...restProps}
					/>
				</div>
			</label>
		</form>
	)
};

export default Input;
