// Image URLs from Unsplash
export const images = {
  // Feature section images
  studio: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
  production: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80',
  equipment: 'https://images.unsplash.com/photo-1598628461950-268968751a2e?auto=format&fit=crop&q=80',
  
  // Hero section background
  hero: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&q=80',
  
  // Logo and branding
  logo: {
    dark: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&q=80',
    light: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&q=80'
  }
} as const;

// Gradients
export const gradients = {
  // Main background gradient
  background: `
    linear-gradient(
      135deg,
      rgba(2, 6, 23, 1) 0%,
      rgba(13, 17, 51, 1) 50%,
      rgba(2, 6, 23, 1) 100%
    )
  `,
  
  // Feature section overlay
  featureOverlay: `
    linear-gradient(
      to right,
      rgba(59, 130, 246, 0.2),
      rgba(168, 85, 247, 0.2)
    )
  `,
  
  // Hero section text
  heroText: `
    linear-gradient(
      to right,
      rgb(59, 130, 246),
      rgb(168, 85, 247)
    )
  `
} as const;