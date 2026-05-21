import AvailableCars from "@/components/homePage/availableCars/AvailableCars";
import Banner from "@/components/homePage/Banner";
import OurServices from "@/components/homePage/OurServices";
import Stats from "@/components/homePage/stats/Stats";

export default function Home() {
  return (
    <>
      <Banner />
      <AvailableCars />
      <Stats />
      <OurServices />
    </>
  );
}
