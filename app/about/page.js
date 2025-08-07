import React from 'react'

const About = () => {
  return (
      <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Us</h1>

      <p style={{ marginBottom: '1rem' }}>
        Welcome to <strong>BitLinks</strong> – your modern and efficient URL shortening service.
        Our goal is to make long, messy URLs short, clean, and easy to share.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        Whether you're sharing links on social media, in emails, or just want a cleaner link for
        your users, BitLinks ensures that your URLs are reliable, fast, and trackable.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>Why Choose Us?</h2>

      <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
        <li>⚡ Fast and reliable redirection</li>
        <li>🔒 Secure link generation</li>
        <li>📊 Click tracking and analytics (coming soon)</li>
        <li>🎯 Easy to use and developer-friendly</li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>Built with ❤️ using Next.js</h2>

      <p style={{ marginTop: '1rem' }}>
        This project was built with performance and simplicity in mind using the Next.js framework. We’re constantly improving it — stay tuned for more features!
      </p>
    </div>
  )
}

export default About
