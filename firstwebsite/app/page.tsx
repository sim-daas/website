import Image from 'next/image';
import styles from './page.module.css'; // Assuming you have specific styles for this page

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Project Logo" width={100} height={100} />
          <h1>Software Dev Project</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        <p>
          Welcome to our software development project! We specialize in creating innovative
          solutions that drive efficiency and growth. Our team is dedicated to providing
          top-notch services tailored to your specific needs.
        </p>
      </section>

      <section id="services" className={styles.section}>
        <h2>Our Services</h2>
        <div className={styles.serviceList}>
          <div className={styles.service}>
            <h3>Custom Software Development</h3>
            <p>
              We build custom software solutions from scratch, tailored to your unique
              requirements and business goals.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Consulting & Strategy</h3>
            <p>
              Our experts provide strategic advice to help you make informed decisions and
              optimize your software projects.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Maintenance & Support</h3>
            <p>
              We offer ongoing maintenance and support to ensure your software continues
              to run smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <h2>Key Features</h2>
        <ul className={styles.featuresList}>
          <li>Scalable and adaptable software solutions</li>
          <li>User-friendly interfaces and experiences</li>
          <li>Robust security and data protection</li>
          <li>Integration with existing systems and tools</li>
        </ul>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Have any questions or want to get started with your project? Reach out to us
          and we'll be happy to help!
        </p>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Software Dev Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
