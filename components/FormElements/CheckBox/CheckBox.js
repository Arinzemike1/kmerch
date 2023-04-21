import React from 'react';
import PropTypes from 'prop-types';
import './_CheckBox.scss';
              
const CheckBox = (props) =>{
	const { label, ...restProps } = props;

	return(
		<label className="checkbox">
			<input
				type="checkbox"
				{...restProps}
			/>
			<span className="checkbox__label">{label}</span>
		</label>
	)
};
CheckBox.defaultProps = {
	label: ""
};
CheckBox.propTypes = {
	label: PropTypes.string
};

export default CheckBox;
