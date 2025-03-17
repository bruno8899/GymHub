import React from "react";
const Classes = () => {
  const classData = [
    {
      title: "Weight Loss ",
      category: "Gym Fit",
      description:
        "Seamlessly visualize quality electrical capital without superior collaboration and idea tically and user sharing listically",
      image:
        "https://storage.googleapis.com/a1aa/image/w3VMn192fJeuvMF-wWM7gtB526F6Zd_yyVrq0WFqLso.jpg",
    },
    {
      title: "Physical Activities",
      category: "Gym Fit",
      description:
        "Seamlessly visualize quality electrical capital without superior collaboration and idea tically and user sharing listically",
      image:
        "https://storage.googleapis.com/a1aa/image/i_XplkxRyRK_oSNOyhCXk830zLqv_w2FEVyXebKb3ew.jpg",
    },
    {
      title: "Zumba & Yoga",
      category: "Gym Fit",
      description:
        "Seamlessly visualize quality electrical capital without superior collaboration and idea tically and user sharing listically",
      image:
        "https://storage.googleapis.com/a1aa/image/0y9By3IP0nag4F2j4JQ3selio0-i6v8kFLzdDAwWyYU.jpg",
    },
  ];

  const stats = [
    { number: 874, label: "Our Happy Clients" },
    { number: 789, label: "Our Best Trainers" },
    { number: 985, label: "Cup Of Coffee" },
    { number: 698, label: "Our Latest Equipment" },
  ];

  const schedule = [
    { className: "Fitness", time: "9:00am - 10:00am", trainer: "Chris Bumstead" },
    { className: "Fitness", time: "6:00am - 8:00am", trainer: "Kai Greene" },
    { className: "Fitness", time: "5:00pm - 7:00pm", trainer: "Sam sulek" },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gradient-to-b from-black to-gray-800 py-12 text-center">
        <h1 className="text-4xl font-bold">Classes</h1>
        <nav className="mt-4">
          <a className="text-red-500" href="#">Home</a> / <span>Classes</span>
        </nav>
      </header>

      <section className="bg-white text-gray-900 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {classData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = 'https://via.placeholder.com/300'; // Fallback image
                }}
              />
              <div className="p-6">
                <h2 className="text-red-500 font-bold">{item.category}</h2>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <a className="text-red-500 mt-4 inline-block" href="#">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-red-500 font-bold">OUR SCHEDULE</h2>
          <h3 className="text-center text-3xl font-bold mt-4">Weekly Class Schedule</h3>
          <div className="flex justify-center mt-8 space-x-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
              (day, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-full ${index === 0 ? "bg-red-500" : "bg-gray-700"}`}
                >
                  {day}
                </button>
              )
            )}
          </div>
          <div className="mt-8 space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h4 className="text-xl font-bold">Class Name</h4>
                  <p className="text-gray-400">{item.className}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Class Time</h4>
                  <p className="text-gray-400">{item.time}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Trainer Name</h4>
                  <p className="text-gray-400">{item.trainer}</p>
                </div>
                <a className="bg-red-500 text-white py-2 px-4 rounded-full" href="#">
                  Discover More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;