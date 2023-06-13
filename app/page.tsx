import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import {getClasses} from "@/app/backend/classes/classes.service"
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  //const listings = await getListings(searchParams);
  const classes = await getClasses();
  const currentUser = await getCurrentUser();
  if (classes.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {classes.map((listing: any) => (
            <ListingCard
              currentUser={null}
              key={listing.id}
              data={listing}
            />
          )) }
          <ListingCard
              currentUser={null}
              key={null}
              data={listing}
            />
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;
