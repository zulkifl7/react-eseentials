import "./TabButton.css";

function TabButton(props) {
	console.log(props);
	return (
		<li>
			<button
				className={props.isSelected ? "active" : ""}
				onClick={props.onSelect}
			>
				{props.value}
			</button>
		</li>
	);
}

export default TabButton;
