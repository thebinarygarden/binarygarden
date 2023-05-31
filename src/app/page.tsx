import Landing from '../components/landing/landing';
import BGContent from "../components/content/bg_content";
import {Navbar} from "@/components/navbar/navbar";

export default function Home() {
    return (
        <main className="bg-transparent">
            <Navbar />
            <Landing />
            <BGContent />
        </main>
    );
}
