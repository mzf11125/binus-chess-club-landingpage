"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Calendar,
  Users,
  GraduationCap,
  MapPin,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const ref = useRef(null);

  const boardMembers = [
    {
      id: 1,
      name: "Richard Thompson",
      role: "Club President",
      image: "/board-members/richard-thompson.jpg",
      experience: "25+ years",
      rating: 1850,
      bio: "A seasoned chess strategist with decades of competitive experience and a passion for mentoring young players.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Tournament Director",
      image: "/board-members/sarah-johnson.jpg",
      experience: "15 years",
      rating: 1760,
      bio: "Expert in tournament organization and player development, bringing precision and enthusiasm to competitive chess.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Head Coach",
      image: "/board-members/michael-chen.jpg",
      experience: "20 years",
      rating: 2100,
      bio: "International master with extensive coaching experience, specializing in advanced chess strategies and techniques.",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Youth Program Coordinator",
      image: "/board-members/elena-rodriguez.jpg",
      experience: "12 years",
      rating: 1680,
      bio: "Dedicated to inspiring young minds through chess, with a innovative approach to youth education and engagement.",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Secretary",
      image: "/board-members/james-wilson.jpg",
      experience: "8 years",
      rating: 1550,
      bio: "Organizational maestro ensuring smooth club operations and member communications.",
    },
    {
      id: 6,
      name: "Anita Patel",
      role: "Treasurer",
      image: "/board-members/anita-patel.jpg",
      experience: "10 years",
      rating: 1620,
      bio: "Financial expert maintaining the club&quot;s resources and supporting strategic growth initiatives.",
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

  const membership = [
    {
      id: 1,
      title: "Student Membership",
      price: "50IDR/semester",
      features: [
        "Weekly club sessions",
        "Access to coaching",
        "Tournament discounts",
        "Online resources",
      ],
    },
    {
      id: 2,
      title: "Professional Membership",
      price: "100IDR/year",
      features: [
        "All student benefits",
        "Advanced training sessions",
        "Priority tournament registration",
        "Mentorship opportunities",
      ],
    },
    {
      id: 3,
      title: "Junior Membership",
      price: "30IDR/semester",
      features: [
        "Youth program access",
        "Beginner coaching",
        "Monthly workshops",
        "Fun chess activities",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-60 z-10" />
          <Image
            src="/chess-club-background.jpg"
            alt="Chess club background"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
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
              Empowering minds, one strategic move at a time
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/binuschessclub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full"
              >
                <Instagram className="mr-2" /> Follow Us
              </a>
              <a
                href="mailto:binuschessclub@gmail.com"
                className="flex items-center bg-transparent border border-white hover:bg-white hover:text-green-900 text-white px-6 py-3 rounded-full"
              >
                <Mail className="mr-2" /> Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 flex space-x-8 bg-white/20 p-4 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <Users size={36} className="text-green-400" />
              <p className="text-sm mt-2">150+ MEMBERS</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy size={36} className="text-green-400" />
              <p className="text-sm mt-2">CITY CHAMPIONS</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar size={36} className="text-green-400" />
              <p className="text-sm mt-2">WEEKLY EVENTS</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
              MEMBERSHIP PLANS
            </h2>
            <div className="w-24 h-1 bg-[#005533] mx-auto mb-6" />
            <p className="text-[#003366] max-w-3xl mx-auto text-lg">
              Choose a membership that fits your chess journey. Whether
              you&quot;re a beginner or an experienced player, we have a plan
              tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membership.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#E6F2E6] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#003366] mb-4">
                  {plan.title}
                </h3>
                <p className="text-[#005533] text-3xl font-bold mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li
                      key={`${plan.title}-feature-${index}`}
                      className="flex items-center text-[#003366]"
                    >
                      <ArrowRight className="mr-2 text-[#005533]" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                >
                  Join Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#E6F2E6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
              CONTACT US
            </h2>
            <div className="w-24 h-1 bg-[#005533] mx-auto mb-6" />
            <p className="text-[#003366] max-w-3xl mx-auto text-lg">
              Have questions or want to join? Reach out to us and start your
              chess journey today!
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#003366] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#005533] rounded-md focus:outline-none focus:ring-2 focus:ring-[#005533]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#003366] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#005533] rounded-md focus:outline-none focus:ring-2 focus:ring-[#005533]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#003366] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-[#005533] rounded-md focus:outline-none focus:ring-2 focus:ring-[#005533]"
                  placeholder="Your Message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#005533] hover:bg-[#003366] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              ABOUT OUR CLUB
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-green-800 max-w-3xl mx-auto text-lg">
              BINUS Chess Club is more than just a gathering of chess
              enthusiasts. We are a community dedicated to promoting strategic
              thinking, personal growth, and the beautiful complexity of chess.
              Whether you&quot;re a beginner or an experienced player, our club
              offers a supportive environment to learn, compete, and excel.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              UPCOMING EVENTS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clubEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {event.event}
                </h3>
                <div className="flex items-center mb-2 text-green-700">
                  <Calendar className="mr-2" size={20} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-4 text-green-700">
                  <MapPin className="mr-2" size={20} />
                  <span>{event.location}</span>
                </div>
                <p className="text-green-800 mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              OUR PROGRAMS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubPrograms.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center text-green-600">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-green-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
              MEET OUR BOARD
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-green-800 max-w-3xl mx-auto">
              Our dedicated board members bring extensive experience and passion
              to guide our club&quot;s mission.
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
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-green-300 mb-1">{member.role}</p>
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
                  <div className="p-4 bg-white">
                    <p className="text-green-800">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-green-900">
                BINUS CHESS CLUB
              </h3>
              <p className="text-green-600 mt-2">© 2025 All Rights Reserved</p>
            </div>
            <div className="flex space-x-6 items-center">
              <a
                href="https://instagram.com/binuschessclub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-blue-600 flex items-center"
              >
                <Instagram className="mr-2" /> Instagram
              </a>
              <a
                href="mailto:binuschessclub@gmail.com"
                className="text-green-600 hover:text-blue-600 flex items-center"
              >
                <Mail className="mr-2" /> Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
