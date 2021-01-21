

export const enterElementInput = (
	id,
	placeholder,
	maxLength,
	fontSize,
	div,
	field,
	stateObj,
	stateObjEdit,
	stateObjValue,
	onChangeHandler,
	toggleHandler
)  => {
	let element = "";
	const toggleHandlerWithFields = (e) =>
		toggleHandler(e, field, stateObj, stateObjEdit);
	const onChangeWithFields = (e) => onChangeHandler(e, field,stateObj,stateObjValue);

	if (stateObjEdit) {
		element = (
			<input
				maxLength={maxLength}
				placeholder={placeholder}
				autoFocus
				id={id}
				style={{ fontSize: fontSize }}
				onChange={onChangeWithFields}
				value={stateObjValue}
				onBlur={toggleHandlerWithFields}
				onKeyUp={(e) => this.exitOnEnter(e, toggleHandlerWithFields)}
			></input>
		);
	} else {
		if (div) {
			element = (
				<div
					onClick={toggleHandlerWithFields}
					style={{ display: "block" }}
				>
					{stateObjValue}
				</div>
			);
		} else {
			element = (
				<span
					onClick={toggleHandlerWithFields}
					style={{ display: "block" }}
				>
					{stateObjValue}
				</span>
			);
		}
	}
	return element;
}

export const toggleEditState = (e, field, thisStateObject, thisStateObjectEdit) => {
	console.log(this.state);
	if (e.target.value !== "") {
		this.setState({
			...this.state,
			[field]: {
				...thisStateObject,
				edit: !thisStateObjectEdit,
			},
		});
	}
}


export const handleOnChange = (e, field, thisStateObject, thisStateObjectValue) => {
	this.setState({
		...this.state,
		[field]: {
			...thisStateObject,
			value: e.target.value,
		},
	});
}

export const exitOnEnter = (e, toggleEditStateFunc) => {
	if (e.key === "Enter" || e.key === "Escape") {
		toggleEditStateFunc(e);
	}
}