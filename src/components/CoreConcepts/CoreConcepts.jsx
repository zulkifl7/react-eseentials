import "./CoreConcepts.css";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./ui/CoreConcept.jsx";

function CoreConcepts() {
	return (
		<>
			<h1>Method 1</h1>
			<section id="core-concepts">
				<h2>CoreConcepts</h2>
				<ul>
					{CORE_CONCEPTS.map((concept) => (
						<CoreConcept key={concept.title} {...concept} />
					))}
				</ul>
			</section>
			<br />
			<h1>Method 2</h1>
			<section id="core-concepts">
				<h2>CoreConcepts</h2>
				<ul>
					{CORE_CONCEPTS.map((concept) => (
						<CoreConcept
							key={concept.title}
							image={concept.image}
							title={concept.title}
							description={concept.description}
						/>
					))}
				</ul>
			</section>
		</>
	);
}

export default CoreConcepts;
