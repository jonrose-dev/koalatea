import Image from "next/image";
import Logo from "./koalatea.jpeg";

export default function Home() {
	return (
		<main className="h-[calc(100vh-12rem)] flex flex-col items-center justify-between p-24">
			<h1 className="sm:text-5xl text-5xl">Welcome to Koala Tea Coffee</h1>
			<Image src={Logo} className="max-h-96 w-fit" alt="logo" />
		</main>
	);
}
