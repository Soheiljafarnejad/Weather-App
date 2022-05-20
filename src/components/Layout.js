import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <section>
      <main className="bg-gray-100 px-4 pt-4 pb-16">{children}</main>
      <Navigation />
    </section>
  );
};

export default Layout;
