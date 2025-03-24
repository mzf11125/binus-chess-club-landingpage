// app/page.js
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  ChevronRight,
  Calendar,
  Users,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function Home() {
  const ref = useRef(null);

  const boardMembers = [
    {
      id: 1,
      name: "Richard Thompson",
      role: "Club President",
      image: "/api/placeholder/400/400",
      experience: "25+ years",
      rating: 1850,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Tournament Director",
      image: "/api/placeholder/400/400",
      experience: "15 years",
      rating: 1760,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head Coach",
      image: "/api/placeholder/400/400",
      experience: "20 years",
      rating: 2100,
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Youth Program Coordinator",
      image: "/api/placeholder/400/400",
      experience: "12 years",
      rating: 1680,
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Secretary",
      image: "/api/placeholder/400/400",
      experience: "8 years",
      rating: 1550,
    },
    {
      id: 6,
      name: "Anita Patel",
      role: "Treasurer",
      image: "/api/placeholder/400/400",
      experience: "10 years",
      rating: 1620,
    },
  ];

  const clubEvents = [
    {
      id: 1,
      event: "Weekly Club Night",
      date: "Every Thursday, 6:30 PM",
      location: "Main Club Room",
      description: "Casual play and analysis for members of all levels",
    },
    {
      id: 2,
      event: "Spring Tournament",
      date: "April 15-16, 2025",
      location: "Community Center",
      description: "USCF-rated tournament open to all members",
    },
    {
      id: 3,
      event: "Youth Chess Camp",
      date: "June 10-14, 2025",
      location: "Lincoln Elementary School",
      description: "Summer chess program for kids ages 8-14",
    },
  ];

  const clubPrograms = [
    {
      id: 1,
      title: "Beginner Classes",
      description:
        "Learn the basics of chess in our friendly beginner sessions",
      icon: <GraduationCap size={32} />,
    },
    {
      id: 2,
      title: "Advanced Training",
      description:
        "Deepen your chess understanding with our experienced coaches",
      icon: <Users size={32} />,
    },
    {
      id: 3,
      title: "Junior Academy",
      description: "Special coaching program for young chess enthusiasts",
      icon: <GraduationCap size={32} />,
    },
    {
      id: 4,
      title: "Community Outreach",
      description: "Chess programs for local schools and community centers",
      icon: <MapPin size={32} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 z-10" />
          <img
            src="/api/placeholder/1920/1080"
            alt="Chess club background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              BINUS CHESS CLUB
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Building community through the royal game since 2024
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              BECOME A MEMBER
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex space-x-8 bg-black/50 p-4 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <Users size={36} className="text-blue-400" />
              <p className="text-sm mt-2">150+ MEMBERS</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy size={36} className="text-blue-400" />
              <p className="text-sm mt-2">CITY CHAMPIONS</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar size={36} className="text-blue-400" />
              <p className="text-sm mt-2">WEEKLY EVENTS</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              WELCOME TO OUR CLUB
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-gray-700 text-lg mb-10">
              The BINUS Chess Club is dedicated to promoting the game of chess
              in our community. We welcome players of all ages and skill levels,
              from beginners just learning the rules to experienced tournament
              players. Our club provides a friendly and supportive environment
              to play, learn, and grow your chess skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community
                </h3>
                <p className="text-gray-600">
                  Join our diverse community of chess enthusiasts from all walks
                  of life and skill levels.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Education
                </h3>
                <p className="text-gray-600">
                  Learn and improve your chess skills through our various
                  classes and coaching programs.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Competition
                </h3>
                <p className="text-gray-600">
                  Test your skills in our regular tournaments, ladder
                  competitions, and team matches.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              MEET OUR BOARD
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our dedicated board members work tirelessly to create a welcoming
              environment and organize engaging events for all our members.
            </p>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-blue-300 mb-1">{member.role}</p>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <div className="flex items-center text-gray-300">
                        <span>Experience: {member.experience}</span>
                        <span className="mx-2">•</span>
                        <span>Rating: {member.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                UPCOMING EVENTS
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6" />
            </div>
            <Button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              VIEW CALENDAR <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg rounded-lg border-t-4 border-blue-600"
              >
                <div className="text-blue-600 mb-2">{event.date}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.event}
                </h3>
                <p className="text-gray-500 mb-2">
                  <MapPin size={18} className="inline mr-2" />
                  {event.location}
                </p>
                <p className="text-gray-700 mb-6">{event.description}</p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  DETAILS
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            OUR PROGRAMS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 p-8 rounded-lg"
              >
                <div className="text-white mx-auto mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-blue-100">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                JOIN OUR CLUB
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
              <p className="text-gray-700 max-w-3xl mx-auto">
                Become a member today and enjoy all the benefits our chess club
                has to offer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Individual
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  $60<span className="text-sm text-gray-500">/year</span>
                </div>
                <ul className="text-gray-700 mb-8 space-y-3">
                  <li>Weekly club nights</li>
                  <li>Tournament eligibility</li>
                  <li>Monthly newsletter</li>
                  <li>USCF membership discount</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  JOIN NOW
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-600 p-8 rounded-lg text-center shadow-xl scale-105 transform"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Family</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $100<span className="text-sm text-blue-200">/year</span>
                </div>
                <ul className="text-blue-100 mb-8 space-y-3">
                  <li>All individual benefits</li>
                  <li>Covers up to 4 family members</li>
                  <li>Youth program discount</li>
                  <li>Family tournament entry</li>
                </ul>
                <Button className="bg-white hover:bg-gray-100 text-blue-600 w-full">
                  JOIN NOW
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Student
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  $30<span className="text-sm text-gray-500">/year</span>
                </div>
                <ul className="text-gray-700 mb-8 space-y-3">
                  <li>Weekly club nights</li>
                  <li>Tournament eligibility</li>
                  <li>Free coaching sessions</li>
                  <li>School team support</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  JOIN NOW
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              VISIT US THIS WEEK
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-10">
              Drop by our club room for a friendly game or to learn more about
              becoming a member. New visitors are always welcome!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                FIND OUR LOCATION
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900">
                BINUS CHESS CLUB
              </h3>
              <p className="text-gray-600 mt-2">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Events
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Membership
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
