import React from 'react';
import cx from 'classnames';
import styles from './Typography.css';

class Typography extends React.Component {

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
					} >
						TITLE
					</h3>
					<h1 className="weight-light">Display Title</h1>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Light, Font-size 42px, Line-height 54px
					</p>
					<p className="text-grey">className="weight-light"</p>
				</div>


				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						H1
					</h3>
					<h1>h1. THP HTML Heading</h1>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Bold, Font-size 42px, Line-height 54px
					</p>
				</div>


				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						H2
					</h3>
					<h2>h2. THP HTML Heading</h2>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Bold, Font-size 36px, Line-height 40px
					</p>
				</div>


				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						H3
					</h3>
					<h3>h3. THP HTML Heading</h3>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Bold, Font-size 24px, Line-height 28px
					</p>
				</div>


				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						H4 / H5 / H6
					</h3>
					<h4>h4. THP HTML Heading</h4>
					<h5>h5. THP HTML Heading</h5>
					<h6>h6. THP HTML Heading</h6>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Bold, Font-size 18px, Line-height 24px
					</p>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						P / Body text
					</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero euismod, volutpat nibh id, facilisis risus. Mauris vel hendrerit tellus. Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl. Sed vitae dictum sem. Proin ut turpis ut tortor iaculis dignissim elementum ut enim.</p>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Regular, Font-size 14px, Line-height 20px
					</p>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						P: Italic
					</h3>
					<p className="italic-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero euismod, volutpat nibh id, facilisis risus. Mauris vel hendrerit tellus. Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl. Sed vitae dictum sem. Proin ut turpis ut tortor iaculis dignissim elementum ut enim.</p>
					<div className={styles.typographyInfo}>
						<p className="text-grey">Regular, Italic, Font-size 14px, Line-height 20px</p>
						<p className="text-grey">className="italic-text"</p>
					</div>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						P: Bold
					</h3>
					<p className="weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero euismod, volutpat nibh id, facilisis risus. Mauris vel hendrerit tellus. Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl. Sed vitae dictum sem. Proin ut turpis ut tortor iaculis dignissim elementum ut enim.</p>
					<div className={styles.typographyInfo}>
						<p className="text-grey">Bold, Font-size 14px, Line-height 20px</p>
						<p className="text-grey">className="weight-bold"</p>
					</div>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						P: Bold & Italic
					</h3>
					<p className="weight-bold italic-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero euismod, volutpat nibh id, facilisis risus. Mauris vel hendrerit tellus. Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl. Sed vitae dictum sem. Proin ut turpis ut tortor iaculis dignissim elementum ut enim.</p>
					<div className={styles.typographyInfo}>
						<p className="text-grey">Bold, Italic, Font-size 14px, Line-height 20px</p>
						<p className="text-grey">className="weight-bold italic-text"</p>
					</div>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						Link
					</h3>
					<a href="#button">Text Link</a>
					<h1><a href="#button">H1 Text Link</a></h1>
					<h2><a href="#button">H2 Text Link</a></h2>
					<h3><a href="#button">H3 Text Link</a></h3>
					<h4><a href="#button">H4 Text Link</a></h4>
					<p><a href="#button">P Text Link</a></p>
					<ol>
						<li><a href="#button">Ol-Li Text Link</a></li>
						<li>Not a link</li>
					</ol>
					<ul>
						<li><a href="#button">Ul-Li Text Link</a></li>
						<li>Not a link</li>
					</ul>
					<div className={styles.typographyInfo}>
						<p className="text-grey">Default link: Regular, Font-size 16px</p>
						<p className="text-grey">Link may be wrapped inside another typography tag, in which case it will match that styling.</p>
						<p className="text-grey italic-text">Note: for buttons styled like links or links styled like buttons, see <a href="#button">Button component</a>.</p>
					</div>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						Quote
					</h3>
					<blockquote>
						<p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero euismod, volutpat nibh id, facilisis risus. Mauris vel hendrerit tellus. Praesent eu ligula eget.</p>
					</blockquote>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Regular, Font-size 18px, Line-height 26px
					</p>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						Ordered List
					</h3>
					<ol>
						<li>Lorem ipsum dolor sit amet</li>
						<li>consectetur adipiscing elit</li>
						<li>Integer vel libero euismod</li>
						<li>volutpat nibh id, facilisis risus</li>
						<li>Mauris vel hendrerit tellus.</li>
						<li>Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl.</li>
						<li>Sed vitae dictum sem.</li>
						<li>Proin ut turpis ut tortor iaculis dignissim elementum ut enim</li>
					</ol>
					<p className={
						this.setClass([
							styles.typographyInfo, 
							'text-grey'
						])
					} >
						Regular, Font-size 14px, Line-height 20px
					</p>
				</div>

				<div className={styles.identitySection}>
					<h3 className={
						this.setClass([
							styles.typographyTitle, 
							'weight-normal', 
							'text-primary'
						])
					} >
						Unordered List
					</h3>
					<ul>
						<li>Lorem ipsum dolor sit amet
							<ul className="nested-list">
								<li>nested list item's parent `ul` gets class `.nested-list`</li>
							</ul>
						</li>
						<li>Integer vel libero euismod
							<ul className="nested-list">
								<li>volutpat nibh id, facilisis risus</li>
								<li>Mauris vel hendrerit tellus.</li>
								<li>Praesent eu ligula eget lacus pharetra lacinia ac vitae nisl.</li>
								<li>Sed vitae dictum sem.</li>
								<li>Proin ut turpis ut tortor iaculis dignissim elementum ut enim</li>
							</ul>
						</li>
					</ul>
					<div className={styles.typographyInfo}>
						<p className="text-grey">Regular, Font-size 14px, Line-height 20px</p>
						<p className="text-grey">Nested ul for nested list items get className="nested-list"</p>
					</div>
				</div>

			</div>
		);
	}
}

export default Typography;