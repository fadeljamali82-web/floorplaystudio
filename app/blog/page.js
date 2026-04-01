'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import BlogGrid from '@/components/sections/BlogGrid';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { blogContent } from '@/content/blog';
import styles from './page.module.css';

export default function BlogPage() {
  const { hero, featuredPost, secondaryPosts, retailLibrary, newsletter } = blogContent;
  const [email, setEmail] = useState('');

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        variant="centered"
      />

      {/* Featured + Secondary Posts */}
      <BlogGrid
        posts={[featuredPost, ...secondaryPosts]}
        variant="featured"
      />

      {/* Retail Library */}
      <BlogGrid
        heading={retailLibrary.heading}
        posts={retailLibrary.posts}
        variant="grid"
      />

      {/* Newsletter */}
      <SectionWrapper background="dark">
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterHeading}>{newsletter.heading}</h2>
          <p className={styles.newsletterSubheading}>{newsletter.subheading}</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.newsletterInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.newsletterButton}>
              {newsletter.buttonText}
            </button>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
}
