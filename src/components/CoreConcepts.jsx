import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./ui/CoreConcept";

function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>CoreConcepts</h2>
			<ul>
				<CoreConcept
					img={CORE_CONCEPTS[0].image}
					title={CORE_CONCEPTS[0].title}
					description={CORE_CONCEPTS[0].description}
				/>
				<CoreConcept
					img={CORE_CONCEPTS[1].image}
					title={CORE_CONCEPTS[1].title}
					description={CORE_CONCEPTS[1].description}
				/>
				<CoreConcept
					img={CORE_CONCEPTS[2].image}
					title={CORE_CONCEPTS[2].title}
					description={CORE_CONCEPTS[2].description}
				/>
				<CoreConcept
					img={CORE_CONCEPTS[3].image}
					title={CORE_CONCEPTS[3].title}
					description={CORE_CONCEPTS[3].description}
				/>
			</ul>
		</section>
	);
}

export default CoreConcepts;
