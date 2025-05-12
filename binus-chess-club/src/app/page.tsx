import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "John Doe", role: "Organizer", position: "Club President" },
  { name: "Jane Smith", role: "Activist", position: "Event Coordinator" },
  { name: "Mike Johnson", role: "Member", position: "Competitive Player" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-blue z-50">
        <div className="container flex items-center justify-between h-16">
          <span className="text-binus-white text-xl font-bold">BINUS Chess</span>
          <div className="flex space-x-6">
            <Button variant="ghost" className="text-binus-white hover:bg-dark-green">
              Home
            </Button>
            <Button variant="ghost" className="text-binus-white hover:bg-dark-green">
              Events
            </Button>
            <Button variant="ghost" className="text-binus-white hover:bg-dark-green">
              Team
            </Button>
            <Button variant="ghost" className="text-binus-white hover:bg-dark-green">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <WavyBackground className="h-screen flex items-center justify-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-center text-binus-white"
          >
            BINUS Chess Club
            <span className="block mt-4 text-2xl">Strategic Minds, Champion Spirit</span>
          </motion.h1>
        </LampContainer>
      </WavyBackground>

      {/* Team Section */}
      <section className="py-20 bg-binus-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-dark-green mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 bg-dark-blue text-binus-white relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dark-green/30 to-dark-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <span className={`inline-block px-4 py-1 rounded-full mb-4 ${
                    member.role === 'Organizer' ? 'bg-dark-green' :
                    member.role === 'Activist' ? 'bg-blue-600' : 'bg-dark-blue'
                  }`}>
                    {member.role}
                  </span>
                  <p className="text-gray-300">{member.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-binus-white py-12">
        <div className="container text-center">
          <p className="text-lg">© 2024 BINUS Chess Club. All rights reserved.</p>
          <p className="mt-4">Contact us at: chess@binus.ac.id</p>
        </div>
      </footer>
    </main>
  );
}