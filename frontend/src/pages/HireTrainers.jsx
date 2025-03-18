import React from 'react';
import Navbar from "../components/Nav_bar";

const HireTrainer = () => {
  return (
    <>
    <div className="bg-gray-900 py-1 text-white">
     
      <header
        className="text-center py-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/a1aa/image/reeWnMx4_KxkqGVPACYk90_smQNPUkBp-goVoVZQ4ns.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">Fitness &amp; Gym News</h1>
        <p className="text-lg mt-2">
          Your fitness tips, workouts, and more from certified trainers and experts.
        </p>
        <div className="mt-4">
          <i className="fas fa-dumbbell text-orange-500 text-2xl"></i>
          <i className="fas fa-dumbbell text-orange-500 text-2xl mx-2"></i>
          <i className="fas fa-dumbbell text-orange-500 text-2xl"></i>
        </div>
        <a
          className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold"
          href="#"
        >
          Hire a Trainer
        </a>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="A person lifting weights in a gym"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/reeWnMx4_KxkqGVPACYk90_smQNPUkBp-goVoVZQ4ns.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                The Perfect Blend in Your Fitness and Gym Routine
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Fitness Guru
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Two people doing fitness exercises"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/08wReS3BQUa5Xr3hDgk7z1Y9yUqC9bRkQVLZYL8oMCI.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Crafting a Sophisticated Fitness and Gym Experience
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Fitness Class
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="People working out in a gym"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/21Fz4_vIUm3HFua4ZXVnJrGtz0g58rmsxDiApSZU9zc.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Science Behind an Ideal Gym Workout for Muscle Growth
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Muscle Expert
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="A person doing yoga in a gym"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/lbWHSPqcJJguAS7tiqU8Dx-ImXzVAOU1cXMqEZKXlt0.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Unveiling the Potency of an Elevated Gym Training
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Fitness Trainer
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="A person lifting weights"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/3wu9CCmH5q5_Bw5V-bTnYyjuzXfm8beIO0yMTvnftaQ.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                The Best Gym Workout Plan for Gaining Muscle
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Muscle Coach
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              alt="Two people exercising with a medicine ball"
              className="w-full"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/BDopid3eZq_KcRl-A77LhYxlA40jwS3tW4r7wDQyFto.jpg"
              width="400"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                  18 DEC
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2">
                The Gym Program that Transforms Your Routine
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                December 18, 2023 | By Gym Instructor
              </p>
              <p className="text-gray-400 mb-4">
                Curabitur senectus risus lorem ut lectus. Praes intesque loremet consequat enim taciti magna
                lectus. Volutpat eros...
              </p>
              <a className="bg-orange-500 text-white px-4 py-2 rounded-full" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default HireTrainer;