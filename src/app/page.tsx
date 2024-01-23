import Image from "next/image";
import Logo from "./koalatea.jpeg";
import Logo2 from "./koalatea2.jpeg";
import Logo3 from "./koalatea3.jpeg";

export default function Home() {
	return (
		<main className="h-screen flex flex-col items-center justify-between px-12 sm:px-24 pt-24 overflow-y-auto">
			<h1 className="sm:text-5xl text-5xl">Welcome to Koala Tea Coffee</h1>
			<div className="flex flex-col pt-4 gap-y-4">
				<Image src={Logo} className="max-h-96 w-fit" alt="logo" />
				<Image src={Logo2} className="max-h-96 w-fit" alt="logo" />
				<Image src={Logo3} className="max-h-96 w-fit" alt="logo" />
			</div>
		</main>
	);
}
