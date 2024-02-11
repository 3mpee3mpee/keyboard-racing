import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Keyboard Racing Game",
    description:
        "Keyboard Racing is a real-time typing race application built with Next.js. Challenge your friends or join random races to test your typing speed and accuracy!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-black min-h-screen flex flex-col items-center justify-between">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
