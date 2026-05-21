import AvailableCars from "@/components/homePage/availableCars/AvailableCars";
import Banner from "@/components/homePage/Banner";
import Stats from "@/components/homePage/stats/Stats";

export default function Home() {
  return (
    <>
      <Banner />
      <AvailableCars />
      <Stats />
    </>
  );
}
