import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav_bar";
import axios from "axios";

const HireTrainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({}); // Track which cards are expanded
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [selectedTrainer, setSelectedTrainer] = useState(null); // Selected trainer for hiring
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");


  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/trainer/trainers/");
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      setTrainers([]);
      alert("Failed to fetch trainers. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle function for Read More / Read Less
  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the expanded state for the specific card
    }));
  };

  // Handle the "Hire Trainer" button click
  const handleHireTrainer = (trainer) => {
    setSelectedTrainer(trainer);
    setShowModal(true); // Show the modal
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedTrainer(null); // Clear selected trainer
  };

  // Handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !userEmail) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // ✅ Log the request body before sending
    const requestData = {
      trainer_name: selectedTrainer.name || "",
      trainer_specialty: selectedTrainer.specialty || "",
      trainer_experience: selectedTrainer.experience || "",
      user_name: userName.trim(), // Ensure it's a valid string
      user_email: userEmail.trim(),
    };

    console.log("Sending request data:", requestData);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/trainer/hire/", requestData, {
        headers: {
          "Content-Type": "application/json", // Ensure JSON format
        },
      });

      alert(`Trainer ${selectedTrainer.name} has been hired successfully!`);
      closeModal();
    } catch (error) {
      console.error("Error hiring trainer:", error);

      // ✅ Log API response if available
      if (error.response) {
        console.error("Server response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Failed to hire trainer."}`);
      } else {
        alert("Network error. Please try again.");
      }
    }
  };




  // Example content for the testimonials/news section
  const newsArticles = [
    {
      title: "The Perfect Blend in Your Fitness and Gym Routine",
      date: "December 18, 2023",
      author: "Fitness Guru",
      image: "https://storage.googleapis.com/a1aa/image/reeWnMx4_KxkqGVPACYk90_smQNPUkBp-goVoVZQ4ns.jpg",
      shortText: "The perfect blend in your fitness and gym...",
      fullText: "routine involves creating a balanced mix of strength training, cardiovascular exercise, flexibility work, and rest. Strength training helps build muscle and improve overall strength, while cardiovascular exercises, like running or cycling, enhance endurance and heart health. Flexibility exercises, such as yoga or stretching, improve mobility and reduce the risk of injury. Additionally, allowing adequate rest and recovery is crucial for muscle repair and preventing overtraining. By combining these elements in the right proportions, you can achieve a well-rounded fitness routine that supports your goals, whether it's building muscle, losing weight, or simply maintaining overall health.",
    },
    {
      title: "Crafting a Sophisticated Fitness and Gym Experience",
      date: "December 18, 2023",
      author: "Fitness Class",
      image: "https://storage.googleapis.com/a1aa/image/08wReS3BQUa5Xr3hDgk7z1Y9yUqC9bRkQVLZYL8oMCI.jpg",
      shortText: "Crafting a sophisticated fitness and gym...",
      fullText: "experience goes beyond just physical workouts; it’s about creating an environment that inspires and motivates individuals to reach their full potential. It starts with a thoughtfully designed space that promotes both functionality and aesthetics—modern equipment, clean and spacious workout areas, and relaxing zones for post-workout recovery. A sophisticated gym also offers personalized training programs tailored to individual goals, whether for strength, endurance, flexibility, or overall wellness. High-quality instructors with expertise in various fitness disciplines add value, offering one-on-one sessions or group classes to keep routines fresh and engaging. In addition, a focus on nutrition guidance, wellness workshops, and advanced recovery techniques, such as cryotherapy or massage therapy, elevates the overall experience. ",
    },
    {
      title: "Science Behind an Ideal Gym Workout for Muscle Growth",
      date: "December 18, 2023",
      author: "Muscle Expert",
      image: "https://storage.googleapis.com/a1aa/image/21Fz4_vIUm3HFua4ZXVnJrGtz0g58rmsxDiApSZU9zc.jpg",
      shortText: "The science behind an ideal gym ...",
      fullText: "workout for muscle growth centers around the principle of progressive overload, which involves gradually increasing the intensity of your workouts to continuously challenge your muscles. When muscles are subjected to resistance training, they undergo microtears, which are then repaired and rebuilt stronger during recovery. To maximize muscle growth, workouts should include a combination of compound exercises (like squats and bench presses) to target multiple muscle groups, followed by isolation exercises to focus on specific muscles. A rep range of 6-12 with moderate to heavy weights is typically recommended to stimulate hypertrophy, balancing muscle tension and metabolic stress.",
    },
  ];

  return (
    <div className="bg-gray-900 py-1 text-white">
      <header
        className="text-center py-1 bg-cover bg-center pt-40 py-20"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/a1aa/image/reeWnMx4_KxkqGVPACYk90_smQNPUkBp-goVoVZQ4ns.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Hire a Professional Trainer</h1>
        <p className="text-lg mt-2">Find the perfect trainer to help you reach your fitness goals.</p>
      </header>

      <h1 className="text-4xl text-center py-12 font-bold">Our Top Trainers</h1>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-lg">Loading trainers...</p>
        ) : trainers.length === 0 ? (
          <p className="text-center text-lg">No trainers available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img alt={trainer.name} className="w-full h-60 object-cover" src={`http://127.0.0.1:8000/media/${trainer.image}`} />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{trainer.name}</h2>
                  <p className="text-gray-400 text-sm mb-2">Specialty: {trainer.specialty}</p>
                  <p className="text-gray-400 text-sm mb-4">Experience: {trainer.experience} years</p>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-full inline-block"
                    onClick={() => handleHireTrainer(trainer)}
                  >
                    Hire Trainer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Modal for Hiring Trainer */}
        {showModal && selectedTrainer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Hire {selectedTrainer.name}</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Trainer Name</label>
                  <input
                    type="text"
                    value={selectedTrainer.name}
                    readOnly
                    className="w-full p-2 bg-gray-700 text-white rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Specialty</label>
                  <input
                    type="text"
                    value={selectedTrainer.specialty}
                    readOnly
                    className="w-full p-2 bg-gray-700 text-white rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Experience (Years)</label>
                  <input
                    type="text"
                    value={selectedTrainer.experience}
                    readOnly
                    className="w-full p-2 bg-gray-700 text-white rounded"
                  />
                </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="user_email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      className="w-full p-2 bg-gray-700 text-white rounded"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-full mr-4"
                  >
                    Confirm Hire
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded-full"
                  >
                    Cancel
                  </button>
                </form>
            </div>
          </div>
        )}

        <h1 className="text-4xl text-center py-12 font-bold">Testimonials & News</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsArticles.map((article, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img alt={article.title} className="w-full h-40 object-cover" src={article.image} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 text-sm mb-2">{article.date} | By {article.author}</p>
                <p className="text-gray-400 mb-4">
                  {expandedCards[index] ? article.fullText : article.shortText}
                </p>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-full"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedCards[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HireTrainer;
