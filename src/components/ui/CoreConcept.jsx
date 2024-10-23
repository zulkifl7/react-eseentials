function CoreConcept(props) {
	const altText = props.title + " Image";
	return (
		<li>
			<img src={props.img} alt={altText} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

export default CoreConcept;
