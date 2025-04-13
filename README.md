# Welcome to our Web Squad project

## Project info


# Campus Bridge - Integrated Academic LMS + Coding Skill Development Platform

## Overview

Campus Bridge is a unified web application designed to serve as an end-to-end academic and coding skill development environment for university students. The platform integrates Learning Management System (LMS) capabilities with advanced coding training modules and AI-assisted features to create a comprehensive educational ecosystem.

## Features
![Screenshot 2025-04-13 054519](https://github.com/user-attachments/assets/f070c193-737b-448d-b4b1-91ce570c067c)

![Screenshot 2025-04-13 054400](https://github.com/user-attachments/assets/f0306a46-42a8-44ef-8aa0-c9b27d092449)


### Student Interface
- *Academic Management*: Access courses, lecture materials, assignments, and attendance records
- *Coding Tracks*: Enroll in structured learning paths (DSA, Web Dev, Python, Java, etc.)
- *Integrated Code Editor*: Practice coding with a built-in compiler supporting multiple languages
- *Progress Tracking*: View skill heatmaps, earned badges, and maintain weekly streaks
- *AI Assistance*: Get real-time code hints and debugging support
- *Collaboration*: Join live group code rooms for pair programming
- *Career Support*: Receive job recommendations based on skill profiles
![Screenshot 2025-04-13 054234](https://github.com/user-attachments/assets/5176f65f-5ebc-44d7-ac70-4563c476dabd)


### Faculty & Trainer Panel
- *Content Management*: Upload and schedule academic materials (PDFs, videos, quizzes)
- *Assignment Creation*: Design coding assignments with custom test cases
- *Progress Monitoring*: Track student performance through analytics dashboards
![Screenshot 2025-04-13 054429](https://github.com/user-attachments/assets/415ddd26-c23b-4767-bc1b-b289d02ca1ac)


### Admin/Placement Panel
- *Analytics Dashboard*: View aggregate skill metrics and coding leaderboards
- *Placement Readiness*: Monitor student eligibility and readiness for placements
- *Event Management*: Schedule mock tests and coding contests
- *Reporting*: Generate and export performance reports
![Screenshot 2025-04-13 054439](https://github.com/user-attachments/assets/d9caabc9-af55-4cd7-9dd4-4212a1cff465)


## Technology Stack

### Frontend
- *React*: JavaScript library for building user interfaces
- *TypeScript*: Typed superset of JavaScript for safer code
- *Tailwind CSS*: Utility-first CSS framework for responsive design

### Backend
- *Node.js*: JavaScript runtime environment
- *Express.js*: Web application framework for Node.js
- *RESTful API*: Architectural style for web services

### Database
- *MongoDB*: NoSQL database for flexible data storage

### Authentication
- *JWT (JSON Web Tokens)*: Secure authentication mechanism

## Project Structure
![image](https://github.com/user-attachments/assets/80043902-65fb-4fdb-b89e-ebc81063def1)





## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   bash
   git clone https://github.com/your-username/campus-bridge.git
   cd campus-bridge
   

2. Install dependencies for both client and server:
   bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   

3. Set up environment variables:
   - Create a .env file in the server directory with the following variables:
     
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     

### Running the Application

1. Start the backend server:
   bash
   cd server
   npm start
   

2. Start the frontend development server:
   bash
   cd ../client
   npm start
   

3. The application should now be running:
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000

## API Documentation

The backend provides RESTful API endpoints for all platform functionality. Detailed API documentation is available via Swagger UI at http://localhost:5000/api-docs when the server is running.

## Contributing

We welcome contributions to Campus Bridge! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/your-feature)
5. Open a Pull Request
*Campus Bridge – Integrated Academic LMS + Coding Skill Development Platform*  

Campus Bridge is a unified digital platform designed to bridge the gap between academic learning and practical coding skill development for university students. Combining the functionalities of a Learning Management System (LMS) with an advanced coding environment, the platform provides a seamless experience for students, faculty, and placement administrators.  

### *Key Features*  
1. *Academic LMS Module*  
   - Students can access course materials, submit assignments, track attendance, and interact with faculty.  
   - Faculty can upload lectures, create quizzes, and monitor academic progress.  

2. *Coding Skill Development*  
   - Interactive coding tracks (DSA, Web Dev, Python, Java) with an integrated online compiler.  
   - Structured problem-solving exercises with real-time feedback.  
   - Performance analytics, skill heatmaps, and achievement badges.  
![Screenshot 2025-04-13 054253](https://github.com/user-attachments/assets/1dfa20d4-1e5d-4073-b244-d0851fe99500)


3. *AI-Powered Assistance*  
   - *Smart Code Debugger*: Real-time hints and logic corrections using AI (Gemini/GPT).  
   - *Live Code Collaboration*: Pair programming in shared virtual coding rooms.  
   - *Job Match Recommender*: AI-driven career suggestions based on skill profiles.  
   - *Code Review Bot*: Automated feedback on code quality and best practices. 
   ![Screenshot 2025-04-13 054342](https://github.com/user-attachments/assets/d48a23e2-85ea-43c6-8d81-a55df272d055)
 

4. *Admin & Placement Support*  
   - Dashboard for tracking student progress, coding leaderboards, and placement readiness.  
   - Tools to schedule mock tests, coding contests, and generate performance reports.  

### *Technology Stack*  
- *Frontend*: React + TypeScript + Tailwind CSS  
- *Backend*: Node.js + Express (RESTful API)  
- *Database*: MongoDB  
- *Authentication*: JWT-based security  

Campus Bridge enhances learning efficiency by merging academic coursework with hands-on coding practice, AI mentorship, and career preparation—all in one platform. Ideal for universities aiming to boost student employability through tech-driven education. 🚀

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com)
