import React from 'react'

const Contact = () => {
  return (
     <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h1>

      <p style={{ marginBottom: '1rem' }}>
        We'd love to hear from you! Whether you have a question, feedback, or need help with using <strong>BitLinks</strong>,
        feel free to get in touch.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>How to Reach Us</h2>

      <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
        <li>📧 Email: <a href="mailto:support@bitlinks.com">support@bitlinks.com</a></li>
        <li>🌐 Website: <a href="https://bitlinks.com" target="_blank">https://bitlinks.com</a></li>
        <li>🐦 Twitter: <a href="https://twitter.com/bitlinks" target="_blank">@bitlinks</a></li>
      </ul>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>Business Hours</h2>

      <p>
        🕒 Monday to Friday: 9:00 AM – 6:00 PM (IST)  
        <br />
        📆 We usually respond within 24 hours.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>Feedback & Support</h2>

      <p style={{ marginTop: '1rem' }}>
        If you have any feature suggestions or need technical assistance with using BitLinks, please don’t hesitate to reach out.
        Your input helps us improve and grow!
      </p>
    </div>
  )
}

export default Contact
