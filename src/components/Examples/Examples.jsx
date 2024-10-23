import TabButton from "./ui/TabButton/TabButton";
import TabContent from "./ui/TabContent/TabContent";
import { EXAMPLES } from "./data.js";
import "./Examples.css";
import { useState } from "react";

function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(buttonName) {
		setSelectedTopic(buttonName);
	}
	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				<TabButton
					isSelected={selectedTopic === "components" ? true : false}
					onSelect={() => handleSelect("components")}
					value="Components"
				/>
				<TabButton
					isSelected={selectedTopic === "jsx" ? true : false}
					onSelect={() => handleSelect("jsx")}
					value="JSX"
				/>
				<TabButton
					isSelected={selectedTopic === "props" ? true : false}
					onSelect={() => handleSelect("props")}
					value="Props"
				/>
				<TabButton
					isSelected={selectedTopic === "state" ? true : false}
					onSelect={() => handleSelect("state")}
					value="State"
				/>
			</menu>
			{!selectedTopic ? (
				<p>Select a Topic</p>
			) : (
				<TabContent
					title={EXAMPLES[selectedTopic].title}
					description={EXAMPLES[selectedTopic].description}
					code={EXAMPLES[selectedTopic].code}
				/>
			)}
		</section>
	);
}

export default Examples;
