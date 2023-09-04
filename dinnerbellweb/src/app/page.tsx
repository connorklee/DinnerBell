'use client'

import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import { useTheme } from "next-themes";

export default function Home() {
	const { theme } = useTheme()

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "violet" })}>Dinner Bell</h1>
			</div>
		</section >
	);
}
