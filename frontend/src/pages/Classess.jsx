import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle the expanded/collapsed description
  const [expanded, setExpanded] = useState(null); // Store expanded state for each description

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle between expanded and collapsed state
  };

  // Fetch class schedule data from backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/classes/schedule/") // Update this with your actual API endpoint
      .then((response) => {
        setSchedule(response.data); // Update state with fetched data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching class schedule:", error);
        setError("Failed to load class schedule.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gradient-to-b from-black to-gray-800 pt-15 py-20 text-center">
        {/* Header Content */}
      </header>

      {/* Show loading state */}
      {loading && <p className="text-center mt-8">Loading class schedule...</p>}

      {/* Show error message if fetch fails */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Schedule Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-red-500 font-bold">OUR SCHEDULE</h2>
          <h3 className="text-center text-3xl font-bold mt-4">Weekly Class Schedule</h3>

          <div className="mt-8 space-y-4">
            {schedule.length > 0 ? (
              schedule.map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold">Class Name</h4>
                    <p className="text-gray-400">{item.class_name}</p>
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
              ))
            ) : (
              <p className="text-center mt-4">No class schedules available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Class Cards Section */}
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
                <p className="text-gray-600 mt-2">
                  {expanded === index
                    ? item.description
                    : item.description.slice(0, 100) + "..."}
                </p>
                <a
                  className="text-red-500 mt-4 inline-block cursor-pointer"
                  onClick={() => toggleDescription(index)}
                >
                  {expanded === index ? "Read Less" : "Read More"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
