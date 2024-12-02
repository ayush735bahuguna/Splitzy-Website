import Head from "next/head";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Splitzi - Simplify Expense Management</title>
        <meta
          name="description"
          content="Effortlessly manage group and individual expenses with Splitzi."
        />
      </Head>
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Splitzi</h1>
          <nav>
            <a href="#features" className="mr-4 hover:text-gray-300">
              Features
            </a>
            <a href="#about" className="mr-4 hover:text-gray-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600">
            Welcome to Splitzi
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Splitzi is your go-to solution for managing both group and
            individual expenses effortlessly. Stay organized, transparent, and
            stress-free.
          </p>
        </section>

        <section id="features" className="mb-10">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">
                Group Expense Management
              </h4>
              <p className="text-gray-600">
                Effortlessly track and split expenses among groups with
                customizable payer options.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">
                Individual Expense Tracking
              </h4>
              <p className="text-gray-600">
                Manage one-on-one expenses with ease and keep everything
                transparent.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">
                Smart Split Calculations
              </h4>
              <p className="text-gray-600">
                Automated calculations for even or customized splits, ensuring
                fairness for all members.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">
                Friend List Integration
              </h4>
              <p className="text-gray-600">
                Keep track of your frequent collaborators by adding them to your
                friend list.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">Search and Filter</h4>
              <p className="text-gray-600">
                Find expenses or groups quickly with robust search and filtering
                options.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">Secure and Reliable</h4>
              <p className="text-gray-600">
                Powered by Firebase, ensuring secure data management and
                real-time updates.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-10">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            About Splitzi
          </h3>
          <p className="text-gray-700">
            Splitzi was designed to simplify expense management for individuals
            and groups. Whether you&apos;re sharing rent, planning a trip, or
            tracking one-on-one payments, Splitzi helps you manage it all with
            ease. With features like group integration, smart splits, and friend
            lists, staying organized has never been easier.
          </p>
        </section>

        <section id="contact" className="mb-10">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h3>
          <p className="text-gray-700">
            Have questions or feedback? Reach out to us at{" "}
            <a
              href="mailto:support@splitzi.com"
              className="text-blue-500 underline"
            >
              support@splitzi.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Splitzi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
