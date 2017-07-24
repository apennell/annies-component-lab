import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.css';

export const Button = ({children, onClick, href, buttonStyle, size, isFullWidth, disabled, loading}) => {

	// set class based on props
	let className = cx(
	  styles[buttonStyle],
	  /** appends text to the string from the 'size' prop */
	  styles[`${size}Size`],
	  {
	    /** only includes the classes if the prop is true */
	    [styles.block]: isFullWidth,
	    [styles.disabled]: disabled,
	    [styles.loading]: loading
	  }
	);

	// Button may be rendered as an actual button or an a tag
	// if href prop is passed, render as <a />
	// else make a <button />
	if (href) {
		return (
			<a 
				href={href}
				className={className}
			>
				{children}
			</a>
		)
	} else {
		return (
			<button 
 				onClick={onClick}	
 				className={className}
 			>
 				{children}
 			</button>
		);
	}
}

Button.propTypes = {
	/** Button label */
	children: PropTypes.string,
	/** Function to call when button is clicked */
	onClick: PropTypes.func,
	/** Pass `href` link if button should use `<a />` tag */ 
	href: PropTypes.string,
	/** Button's style type */
	buttonStyle: PropTypes.oneOf([
		'normal', 
		'primary', 
		'inverse', 
		'textLink'
	]),
	/** Size of the button */
	size: PropTypes.oneOf([
		'normal', 
		'large'
	]),
	/** Set true if button should be full-width, else leave blank */
	isFullWidth: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
}

Button.defaultProps = {
	children: '',
	buttonStyle: 'normal',
	size: 'normal',
	isFullWidth: false,
	disabled: false,
	loading: false,
}

export default Button;