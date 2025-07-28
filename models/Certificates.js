const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Certificate name (e.g., "React Developer Certification")
  },
  organization: {
    type: String,
    required: true, // Issuing body (e.g., "Udemy", "Google", "AWS")
  },
  issueDate: {
    type: Date,
    required: true, // When the certificate was issued
  },
  certificateId: {
    type: String,
    unique: true, // Unique identifier for verification
  },
  certificateUrl: {
    type: String, // URL to view/download the certificate
  },
  certificateImage: {
    type: String, // Image URL of the certificate
  },
  priority: {
    type: Number,
    default: 0, // Lower number means higher display priority
  },
});

module.exports = mongoose.model("Certificate", CertificateSchema);
