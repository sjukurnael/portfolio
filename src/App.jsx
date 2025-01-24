import React from 'react';

const Portfolio = () => {
  const experience = [
    {
      company: "Excidia",
      role: "Technical Founder",
      period: "Sep 2024 - Current",
      location: "Berkeley, CA",
      achievements: [
        "Developed full-stack web application from 0 to 1 using React to streamline Indonesia's Harmonized System (HS) code classification, improving import/export processing efficiency, and achieved 98% classification accuracy",
        "Integrated OpenAI's GPT-4 API with custom prompt engineering and context management for accurate HS code classification and multi-language support",
        "Conducted in-depth user research with HS code classification experts and successfully acquired 20+ major Indonesian logistics companies",
        "Implemented semantic search using MongoDB vector database, enabling efficient querying across 15000+ HS codes and their descriptions",
        "Architected complex dialogue flows using Finite State Machine (FSM) patterns, enabling systematic navigation through multi-level HS code hierarchies"
      ]
    },
    {
      company: "Tiket.com",
      role: "Software Engineer",
      period: "June 2024 – Aug 2024",
      location: "Jakarta, Indonesia",
      achievements: [
        "Developed a robust image processing application in C++ implementing Connected Component Labeling (CCL) algorithm for object detection in binary matrices",
        "Engineered dual solutions using iterative and recursive approaches, utilizing production-ready generic data structures including templated Stack and Matrix classes now used by 30+ tiket.com engineers",
        "Implemented depth-first search (DFS) traversal methods with efficient memory management and sophisticated object-oriented design patterns, improving runtime performance by 45%",
        "Achieved 100% accuracy in object detection and size calculation across 200+ diverse test cases through systematic 2D grid processing"
      ]
    }
  ];

  const projects = [
    {
      title: "TCP Implementation",
      points: [
        "Engineered a complete TCP three-way handshake mechanism for connection establishment",
        "Designed and implemented reliable data transfer with sequence numbers, acknowledgments, and flow control",
        "Built an efficient retransmission system with dynamic timeout calculation using RFC 6298 algorithm",
        "Developed robust packet queuing systems for handling out-of-order packet delivery",
        "Implemented connection teardown protocols for both active and passive connection closure",
        "Achieved 100% score on all test cases across 9 implementation stages"
      ]
    },
    {
      title: "Traceroute Implementation",
      points: [
        "Engineered packet parsing system for IPv4, ICMP, and UDP protocols using bitwise operations",
        "Implemented comprehensive error handling for network anomalies including packet drops, duplicates, and malformed responses",
        "Built packet validation system to filter irrelevant packets based on protocol headers",
        "Designed efficient probe and response correlation system to handle out-of-order packets",
        "Achieved 100% pass rate across all test cases, including edge cases like routing loops and silent routers"
      ]
    },
    {
      title: "File Systems",
      points: [
        "Implemented a write-back buffer cache for a Unix-like file system, improving I/O performance",
        "Built support for hierarchical directories in Pintos OS, including path traversal and directory operations",
        "Developed extensible file support using an indexed inode structure for 8MB files",
        "Implemented fine-grained synchronization for concurrent file system operations"
      ]
    },
    {
      title: "Thread Management System",
      points: [
        "Implemented user-level multithreading with synchronization primitives",
        "Designed priority scheduler with priority inheritance to prevent inversion",
        "Developed efficient alarm clock mechanism eliminating busy waiting",
        "Integrated user-thread management with process control maintaining 1:1 thread mapping"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Nathanael Sjukur</h1>
        <p className="text-xl text-gray-600">Technical Founder & Software Engineer</p>
        <p className="text-gray-600">naelsjukur@berkeley.edu • 408-581-4057</p>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Education</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold">University of California, Berkeley</h3>
              <p className="text-gray-600">Aug 2023 - Dec 2025</p>
            </div>
            <p>B.A. Computer Science • GPA: 3.63</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <h3 className="font-semibold">De Anza College, Cupertino</h3>
              <p className="text-gray-600">Sep 2021 - Jun 2023</p>
            </div>
            <p>A.S. Computer Science • GPA: 4.00</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Work Experience</h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="text-gray-600">{job.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{job.period}</p>
                  <p className="text-gray-600">{job.location}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-800">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Projects</h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {project.points.map((point, i) => (
                  <li key={i} className="text-gray-800">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;