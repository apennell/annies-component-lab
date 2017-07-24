import React from 'react';
import cx from 'classnames';
import styles from './Colors.css';

class Colors extends React.Component {

	setClass = (classes) => {
		let classNames = [];

		classes.map((thisClass) => 
			classNames.push(thisClass)
		);

		return cx(classNames)
	}

	render() {
		return (
			<div>
				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					}>
						Brand
					</h3>
					
					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.primaryColorLight
							])
						} />
						<div>
							<h4 className="text-primary">--primary-color-light</h4>
							<p>#a5bce0 | 3.59:1</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.primaryColor
							])
						} />
						<div>
							<h4 className="text-primary">--primary-color</h4>
							<p>#4276C9 | 4.5:1</p>
							<p>This color will be used as our primary and accent color. Places it’ll appear include our buttons, text, illustrations, and many other elements.</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.primaryColorDark
							])
						} />
						<div>
							<h4 className="text-primary">--primary-color-dark</h4>
							<p>#305ea8 | [contrast ratio]</p>
						</div>
					</div>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					}>
						Greys
					</h3>
					
					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.white
							])
						} />
						<div>
							<h4 className="text-primary">--white</h4>
							<p>#ffffff | [contrast ratio]</p>
							<p>This is our white. It’s #fff, for now. We may change to a custom, blue-hued white.</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.greyLight
							])
						} />
						<div>
							<h4 className="text-primary">--grey-light</h4>
							<p>#F3F6F9 | 19.36:1</p>
							<p>This will be used for background colors, inverse button outlines, and text.</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.grey
							])
						} />
						<div>
							<h4 className="text-primary">--grey</h4>
							<p>#a5a5a5 | [contrast ratio]</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.greyDark
							])
						} />
						<div>
							<h4 className="text-primary">--grey-dark</h4>
							<p>#2e2e2e | [contrast ratio]</p>
							<p>Mainly used for our text.</p>
						</div>
					</div>

					<div className={styles.colorSection}>
						<div className={
							this.setClass([
								styles.colorSwatch, 
								styles.black
							])
						} />
						<div>
							<h4 className="text-primary">--black</h4>
							<p>#000000 | [contrast ratio]</p>
							<p>May not need this, but could be a could option to have for small text that needs high contrast.</p>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Colors;