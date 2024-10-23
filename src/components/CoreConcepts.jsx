import CoreConcept from "./ui/CoreConcept";
import componentImg from "../assets/components.png";
import jsxImg from "../assets/jsx-ui.png";
import propsImg from "../assets/config.png";
import stateImg from "../assets/state-mgmt.png";

function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>CoreConcepts</h2>
			<ul>
				<CoreConcept
					img={componentImg}
					title="Components"
					description="The core UI Building block compose the user interface by combining multiple components"
				/>
				<CoreConcept
					img={jsxImg}
					title="JSX"
					description="Return HTML code to define the actual markup that will be rendered"
				/>
				<CoreConcept
					img={propsImg}
					title="Props"
					description="Make components configurable"
				/>
				<CoreConcept
					img={stateImg}
					title="State"
					description="React-managed Data"
				/>
			</ul>
		</section>
	);
}

export default CoreConcepts;
