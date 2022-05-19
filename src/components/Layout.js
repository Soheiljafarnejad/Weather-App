import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <section>
      <main className="bg-gray-100 p-4">{children}</main>
      <Navigation />
    </section>
  );
};

export default Layout;
