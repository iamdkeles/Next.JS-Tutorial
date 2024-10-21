"use client";

import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [newPost, setNewPost] = useState(null); // Store the new post
  const [isSubmitting, setIsSubmitting] = useState(false);
  cosnt[(shouldSubmit, setShouldSubmit)] = useState(false); // Trigger useEffect on submission

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");
    setShouldSubmit(true); // Trigger the useEffect
  };

  useEffect(() => {});
};
