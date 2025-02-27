import { Heading } from "@radix-ui/themes";
import WelcomeMessage from "./components/Client/WelcomeMessage";
import EventCard from "./components/server/Card/EventCard";

export default function Home() {
    return (
        <div>
            <Heading className="flex justify-center text-3xl mb-4">
                G EVENT
            </Heading>
            <WelcomeMessage />
            <EventCard />
        </div>
    );
}
