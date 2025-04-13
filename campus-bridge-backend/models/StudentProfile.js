import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema({
  name: String,
  skills: [String],
  githubUrl: String,
  resumeText: String,
});

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
export { StudentProfile };
