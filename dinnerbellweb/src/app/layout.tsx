import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import Header from "../../components/Header/Header";
import { ReduxProvider } from "../redux/provider";

export const metadata: Metadata = {
	title: {
		default: "DinnerBell",
		template: `%s - DinnerBell`,
	},
	description: 'DinnerBell made by Connor Lee',
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/alertbell.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark", }}>
					<ReduxProvider>
						<div className="relative flex h-screen">
							<SideNavBar />
							<div className="w-full flex-col">
								<Header />
								<main className="container mx-auto max-w-7xl pt-16 flex-grow">

									{children}
								</main>
							</div>
						</div>
					</ReduxProvider>
				</Providers>
			</body>
		</html >
	);
}
