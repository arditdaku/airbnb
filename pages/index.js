import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
export default function Home({ exploreData, cardsData }) {
    console.log('cards', cardsData);
    return (
        <div className="">
            <Head>
                <title>AirBnB</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            {/* Banner */}
            <Banner />
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {/* Pull some data from a server - API -endpints  */}
                        {exploreData?.map(({ img, distance, location }) => (
                            <SmallCard
                                key={img}
                                image={img}
                                location={location}
                                distance={distance}
                            />
                        ))}
                    </div>
                </section>

                <section className="">
                    <h2 className="text-4xl font-semibold py-8">
                        Live Anywhere
                    </h2>

                    <div className="flex p-3 space-x-3 overflow-scroll scrollbar-hide">
                        {cardsData.map(({ img, title }) => (
                            <MediumCard img={img} title={title} key={img} />
                        ))}
                    </div>
                </section>
                <LargeCard
                    img={'https://links.papareact.com/4cj'}
                    title={'The Greates Outdoors'}
                    description={'Wishlist curated by Airbnb'}
                    buttonText={'Get Inspired'}
                />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then(
        (res) => res.json()
    );
    const cardsData = await fetch('https://links.papareact.com/zp1').then(
        (res) => res.json()
    );

    return {
        props: {
            exploreData,
            cardsData,
        },
    };
}
