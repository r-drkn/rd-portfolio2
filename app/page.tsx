export default function Home() {
	return (
		<main className="min-h-full w-full text-gray-800 px-4 py-8 max-w-screen-sm mx-auto">
			<header className="pb-4 border-b border-gray-800/80">
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Rob Dirken</h1>
					<span className="text-lg">Web Developer</span>
				</div>
				<div className="flex justify-between gap-x-4">
					<div className="flex gap-x-4">
						<a
							className="underline underline-offset-4 decoration-1"
							href="mailto:robert.dirken@gmail.com"
						>
							Email
						</a>
						<span>{`//`}</span>
						<a
							className="underline underline-offset-4 decoration-1"
							href="tel:0434711288"
						>
							Phone
						</a>
					</div>
					<span>Brisbane, QLD</span>
				</div>
			</header>
			<section>
				<h2 className="text-xl font-bold pt-8 w-full tracking-wide">
					Key Tech/Skills
				</h2>
				<ul className="mt-4 list-none list-inside grid grid-cols-3">
					<li>NextJs</li>
					<li>Typescript</li>
					<li>Tailwind</li>
					<li>GraphQL</li>
					<li>Framer Motion</li>
					<li>GSAP</li>
					<li>React Native</li>
				</ul>
			</section>
			<section className="mt-8">
				<h2 className="text-xl font-bold tracking-wide">Work</h2>
				<div className="mt-2">
					<div className="flex justify-between">
						<div>
							<h3 className="text-lg font-semibold">EnergyFlex</h3>
							<p className="mt-2">Front End Developer</p>
							<p className="italic">Brisbane/Remote</p>
						</div>
						<span className="text-base font-semibold max-w-36 text-right">
							August 2023 - Present
						</span>
					</div>
				</div>
				<div className="mt-4">
					<p className="font-medium">
						EnergyFlex is a growing start-up building a platform to guide users
						through optimising the way they use electricity to better align with
						the generation of renewables in the grid. During my time here I have
						primarily focused on building out the UI and integrating it with
						backend services.
					</p>
					<ul className="list-disc list-inside mt-4">
						<li>
							Worked under high pressure to build out new features from scratch
							in a short period of time.
						</li>
						<li>
							Converted legacy components / frameworks into a modern, reusable,
							and maintainable codebase.
						</li>
						<li>
							Worked closely with the backend team to bring to life new features
							and ensure the best possible user experience.
						</li>
					</ul>
				</div>
				<div className="mt-4">
					<div className="flex justify-between">
						<div>
							<h3 className="text-lg font-semibold">GrowthOps / Khemistry</h3>
							<p className="mt-2">Front End Developer</p>
							<p className="italic">Brisbane/Remote</p>
						</div>
						<span className="text-base font-semibold max-w-36 text-right">
							May 2021 - August 2023
						</span>
					</div>
				</div>
				<div className="mt-4">
					<p className="font-medium">
						GO Digital is a digital agency focused on creating meaningful and
						memorable human experiences for clients. My role here has centered
						around building web applications for a wide range of companies in
						React / NextJS / Typescript, typically integrated with DatoCMS.
					</p>
					<ul className="list-disc list-inside mt-4">
						<li>
							Incorporated a vast array of modern, quality libraries and APIs to
							provide clients with robust and reusable web architectures.
						</li>
						<li>
							Established code coverage via a testing suite using Jest and React
							Testing Library as well as user testing and optimization of
							Lighthouse scores.
						</li>
						<li>
							Communicated in teams across multiple concurrent projects in both
							client facing and internal settings employing a CD/CI workflow
							along with Agile methodologies.
						</li>
					</ul>
				</div>
			</section>
			<section className="mt-8">
				<h2 className="text-xl font-bold tracking-wide">Education</h2>
				<div className="mt-2">
					<div className="flex justify-between">
						<div>
							<h3 className="text-lg font-semibold">Coder Academy</h3>
							<p>Cert IV Information Technology</p>
							<p>Brisbane, QLD</p>
						</div>
						<span className="text-base font-semibold max-w-36 text-right">
							Graduated January 2021
						</span>
					</div>
					<div className="flex justify-between mt-4">
						<div>
							<h3 className="text-lg font-semibold">Griffith University</h3>
							<p>BA, Environmental Management</p>
							<p>Brisbane, QLD</p>
						</div>
						<span className="text-base font-semibold max-w-36 text-right">
							Graduated November 2012
						</span>
					</div>
				</div>
			</section>
			<section className="mt-8">
				<h2 className="text-xl font-bold tracking-wide">Interests</h2>
				<div className="mt-2">
					<ul className="list-disc list-inside">
						<li>Cooking delicious things</li>
						<li>Going places other than my home</li>
						<li>Electronic music</li>
						<li>Basketball</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
