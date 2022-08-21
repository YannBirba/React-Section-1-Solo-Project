import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Header from "./components/Header";
import LeadingImage from "./components/LeadingImage";
import Section from "./components/Section";
import Socials from "./components/Socials";

type Theme = "light" | "dark";

const App: React.FC = () => {
    const [theme, setTheme] = React.useState<Theme>("light");

    const handleSwitchTheme = () => {
        const root = document.getElementsByTagName("html")[0];

        if (theme === "light") {
            setTheme(() => "dark");
            root.classList.add("dark");
        } else {
            setTheme(() => "light");
            root.classList.remove("dark");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <button
                className="transition-all my-5 drop-shadow p-5 border rounded-full shadow-xl hover:bg-slate-100 hover:shadow-md active:bg-slate-200 active:shadow-xs focus:ring-2 focus:outline-none"
                onClick={handleSwitchTheme}
            >
                {theme === "dark" ? (
                    <FaSun fill="rgb(31 41 55)" size={25} />
                ) : (
                    <FaMoon fill="rgb(31 41 55)" size={25} />
                )}
            </button>
            <div className="flex flex-col dark:bg-neutral-800 bg-gray-50 dark:text-white text-gray-800 max-w-xs rounded-xl">
                <LeadingImage
                    className="w-full rounded-t-xl"
                    src="http://unsplash.it/317/317?random&gravity=center"
                    title=""
                    alt=""
                />
                <div className="flex flex-col gap-4 px-10 py-6">
                    <Header />
                    <Section title="About">
                        I am a frontend developer with a particular interest in
                        making things simple and automating daily tasks. I try
                        to keep up with security and best practices, and am
                        always looking for new things to learn.
                    </Section>
                    <Section title="Interests">
                        Food expert. Music scholar. Reader. Internet fanatic.
                        Bacon buff. Entrepreneur. Travel geek. Pop culture
                        ninja. Coffee fanatic.
                    </Section>
                </div>
                <Socials className="dark:bg-neutral-900 bg-neutral-200 h-16 flex justify-center items-center gap-5 rounded-b-xl" />
            </div>
        </div>
    );
};

export default App;
