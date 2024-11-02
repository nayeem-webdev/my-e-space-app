const SubscribeNewsletter = () => {
  return (
    <section className=" py-40">
      <div className="max-w-4xl mx-auto text-center p-10 rounded-lg shadow-lg bg-[#2f3c4d]">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Mars Rover News!
        </h2>
        <p className="text-gray-300 mb-6">
          Join our newsletter to receive the latest updates and discoveries from
          the Curiosity rover and other exciting space missions.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-3 mb-4 rounded-lg text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-accentColor text-white py-2 rounded-lg hover:bg-[rgb(253,89,58)] transition duration-200"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
