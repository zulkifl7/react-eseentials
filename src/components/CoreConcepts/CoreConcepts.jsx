import "./CoreConcepts.css";
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../ui/CoreConcept.jsx";

function CoreConcepts() {
	return (
		<>
			<h1>Method 1</h1>
			<section id="core-concepts">
				<h2>CoreConcepts</h2>
				<ul>
					<CoreConcept {...CORE_CONCEPTS[0]} />
					<CoreConcept {...CORE_CONCEPTS[1]} />
					<CoreConcept {...CORE_CONCEPTS[2]} />
					<CoreConcept {...CORE_CONCEPTS[3]} />
				</ul>
			</section>
			<br />
			<h1>Method 2</h1>
			<section id="core-concepts">
				<h2>CoreConcepts</h2>
				<ul>
					<CoreConcept
						image={CORE_CONCEPTS[0].image}
						title={CORE_CONCEPTS[0].title}
						description={CORE_CONCEPTS[0].description}
					/>
					<CoreConcept
						image={CORE_CONCEPTS[1].image}
						title={CORE_CONCEPTS[1].title}
						description={CORE_CONCEPTS[1].description}
					/>
					<CoreConcept
						image={CORE_CONCEPTS[2].image}
						title={CORE_CONCEPTS[2].title}
						description={CORE_CONCEPTS[2].description}
					/>
					<CoreConcept
						image={CORE_CONCEPTS[3].image}
						title={CORE_CONCEPTS[3].title}
						description={CORE_CONCEPTS[3].description}
					/>
				</ul>
			</section>
		</>
	);
}

export default CoreConcepts;
