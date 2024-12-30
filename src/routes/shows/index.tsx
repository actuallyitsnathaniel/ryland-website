import ShowLink from "../../components/show-link";
import showJan10th from "../../assets/images/discography/Singles_EPs/gonna-be-fine-600.jpg";

const Shows = () => {
  return (
    <main className="flex flex-col min-h-full md:mt-16 text-center p-3 text-white justify-center text-3xl">
      {/* It's quiet... too quiet... */}
      <div className="mt-16" />
      <div className="md:p-3">
        <ShowLink
          thumbnail={showJan10th}
          link={"https://partiful.com/e/1mZ79A8ZNqH1lQtD45Er"}
          venue={"Sunland, CA"}
          date={"January 10th, 2024"}
          artists={
            "Ryland | John Lowell Anderson | Evan Walter & Eli Leonard | Keith Evans"
          }
          alt={"show-jan-10th"}
        />
      </div>
    </main>
  );
};

export default Shows;
