import "./TabContent.css";
function TabContent(props) {
	return (
		<div id="tab-content">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<pre>
				<code>{props.code}</code>
			</pre>
		</div>
	);
}

export default TabContent;
