import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

const Search = ({ searchResults }) => {
    const router = useRouter();
    console.log('search', searchResults);
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {noOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="pill">Cancellation Flexibility</p>
                        <p className="pill">Type of Place</p>
                        <p className="pill">Price</p>
                        <p className="pill">Rooms and Beds</p>
                        <p className="pill">More filters</p>
                    </div>

                    {searchResults.map(
                        ({
                            img,
                            location,
                            title,
                            description,
                            star,
                            price,
                            total,
                        }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                start={star}
                                price={price}
                                total={total}
                                description={description}
                            />
                        )
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Search;
export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(
        (res) => res.json()
    );

    return {
        props: {
            searchResults,
        },
    };
}
