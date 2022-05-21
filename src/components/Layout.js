import { useSelector } from "react-redux";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const { data, loading, error } = useSelector((store) => store.data);
  return (
    <section className="bg-gray-100 min-h-screen">
      <section className="mx-auto 2xl:max-w-screen-2xl md:flex md:gap-2">
        <nav className="fixed bottom-0 left-0 right-0 z-10 md:w-3/12">
          <Navigation />
        </nav>
        <main className="min-h-screen bg-gray-100 px-4 pt-4 pb-16 md:w-9/12 md:ml-auto">
          {loading && !error && (
            <section className="backdrop-blur-sm fixed inset-0 z-20"></section>
          )}
          {error && !loading && (
            <h2 className="text-2xl text-center">{error}</h2>
          )}
          {data && !error && children}
        </main>
      </section>
    </section>
  );
};

export default Layout;
