import Card from "./Components/Card";
import Footer from "./Components/Footer";
import FullPage from "./Components/FullPage";
import Header from "./Components/Header/Header";
import HorizontalWrapper from "./Components/HorizontalWrapper";
import SectionLayout from "./Components/SectionLayout";
import ZoomSection from "./Components/ZoomSection";
import TextSection from "./TextSection";

import { cards } from "./utils/cards";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[100vh] w-[100%]">
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="absolute grid gap-16 grid-col ">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={800}>
            <div className="right-0 grid gap-16 grid-col">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <div className="p-8 bg-[#161616] rounded-2xl ">
            <iframe
              src="https://www.youtube.com/embed/Oz9zw7-_vhM"
              title="NFTs, Explained"
              allowFullScreen
              className=" border-none w-[100%] h-[52rem] rounded-2xl"
            />
          </div>
        </SectionLayout>

        <SectionLayout>
          <ZoomSection />
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </main>
    </>
  );
}
