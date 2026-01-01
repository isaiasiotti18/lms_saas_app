import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Companion One"
          topic="Topic A"
          subject="Subject X"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCard
          id="2"
          name="Companion Two"
          topic="Topic B"
          subject="Subject Y"
          duration={45}
          color="#d0e5ff"
        />
        <CompanionCard
          id="3"
          name="Companion Three"
          topic="Topic C"
          subject="Subject Z"
          duration={60}
          color="#ffe5d0"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
