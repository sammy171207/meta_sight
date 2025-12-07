export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  snippet: string;
  image: string;
  content: string;
  readTime: string;
  tags: string[];
}

export interface BlogComment {
  id: string;
  author: string;
  email: string;
  content: string;
  date: string;
  replies?: BlogComment[];
}

// Mock blog data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence in Market Research: A Deep Dive",
    author: "Sarah Johnson",
    date: "June 19, 2024",
    category: "Market Trends",
    snippet: "Artificial Intelligence (AI) is no longer a futuristic concept. It's a transformative force reshaping industries, and market research is no exception.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD96A0b5M2KnIAJswlUr1kETX8WFoMTKqI8nYlF3fCn0QlyHAoCzKJjidkdf2StpQ71SAJcoADhWBlWcB0cxpyZu7sR7RQ5ANcekkAFBETxRHDKLmqKjNg6q603eCuYcThVQ3G3OUQ8b4CVYSFZS2e8mbIFAAQJb6tktTQFWLNQoaVFHBDB6CZuI7Ki2_d4efdaoI545QdRE5wycGFAwdkVGX-MpDKMMl8kFqk1rXBS-3CWgFafy1EfL5BVF0BITmD_MPUiivBZNS8",
    readTime: "8 min read",
    tags: ["AI", "Market Research", "Technology", "Data Analytics"],
    content: `
# The Future of Artificial Intelligence in Market Research: A Deep Dive

Artificial Intelligence (AI) is no longer a futuristic concept. It's a transformative force reshaping industries, and market research is no exception. At Metastat Insight, we are at the forefront of leveraging AI to unlock deeper, more predictive insights for our clients. This article explores the profound impact of AI on market research methodologies and what the future holds.

## From Data Collection to Insight Generation

Traditionally, market research has been a labor-intensive process, involving surveys, focus groups, and manual data analysis. AI revolutionizes every stage of this workflow:

### Automated Data Collection
AI-powered tools can monitor social media, news articles, and online forums in real-time to gather vast amounts of unstructured data on consumer sentiment. This capability allows researchers to identify market trends and consumer behavior patterns with unprecedented speed and accuracy.

### Enhanced Survey Design
Machine learning algorithms can help design more effective surveys by identifying the most impactful questions and optimizing their flow. They identify potential question biases and suggest improvements to ensure that surveys yield more reliable and actionable insights.

### Predictive Analytics
Instead of just describing what has happened, AI allows us to predict future trends, customer churn, and market shifts with a high degree of accuracy. This allows businesses to be proactive rather than reactive in their strategies.

## The Ethical Imperative

With great power comes great responsibility. The use of AI in market research raises important ethical considerations, including data privacy, algorithmic bias, and transparency. It is crucial for firms like ours to adopt a robust ethical framework, ensuring that AI is used responsibly and that consumer data is protected. Transparency in how algorithms are trained and used is key to building and maintaining trust with both clients and consumers.

## Conclusion

As we move forward, the synergy between human expertise and artificial intelligence will define the next generation of market research. The future is not just about big data—but smart data—and AI is the key to unlocking its full potential.
    `
  },
  {
    id: "2",
    title: "Consumer Behavior Trends for 2024",
    author: "Jane Smith",
    date: "Oct 22, 2023",
    category: "Data Analysis",
    snippet: "A deep dive into the shifting priorities and purchasing habits of the modern consumer in a post-pandemic world.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCABE_JakN4Q4TtiOeH9Zlm5wAZgRmNLm2VgNwgOAQfIwiuWp2Qd50oCekkYVnidwt17DSFBnljgVslNMRJMgjZ-JLtAWUv338Ya7K4QMVJJRY-4KO8-lgby_wEeOAIDBdazsHvexWG46eNtTeLwAdYTlIqfl4e8j3XdsuU7h4vNNM7f2I9sit4Cbi8Wom2FEkB6zZBvNVJzfaGuaPiFeCW7QEcIJIzFWnqmj3P932ELe4YVRxA_M-zDBPxCgbOzOnGCb3yQlq3g0",
    readTime: "6 min read",
    tags: ["Consumer", "Trends", "Behavior"],
    content: "Full content for consumer behavior trends..."
  },
  {
    id: "3",
    title: "Navigating Cybersecurity in the Automotive Sector",
    author: "Admin",
    date: "Oct 15, 2023",
    category: "Case Studies",
    snippet: "Key trends and challenges in securing connected vehicle infrastructure.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5BPIINM_O9bUdb-_GHvJaFWEMkIRb7YC63fJ-bnIgQPuZk_skLb9HF9EkN-T32VrDDBVflJ6oKo7p2iFO_cj9DAjPhB8sbX89pSzYHN6-ggq8qI8B5a6ruOCU-xqRSPsgS3dQbu5XqqlJGDNZebk_cU6JW8Tfn3o80FkJ_LFQv6RVV9Sx1oTzF8IqNMDM8IJ1Z3PBnpRgk4TJ4Z5z5CrWOp68GHYyDujW3FJsJMUZ-fD3YITLvzK8ss_HOioHhwg4b5KDG4Gv1JU",
    readTime: "7 min read",
    tags: ["Cybersecurity", "Automotive", "Technology"],
    content: "Full content for cybersecurity article..."
  }
];

export const blogService = {
  // Get all blog posts
  getAllBlogs: (): BlogPost[] => {
    return blogPosts;
  },

  // Get single blog post by ID
  getBlogById: (id: string): BlogPost | undefined => {
    return blogPosts.find(post => post.id === id);
  },

  // Get related blog posts (same category, different post)
  getRelatedBlogs: (currentId: string, limit: number = 3): BlogPost[] => {
    const currentPost = blogPosts.find(p => p.id === currentId);
    if (!currentPost) return [];

    return blogPosts
      .filter(p => p.id !== currentId && p.category === currentPost.category)
      .slice(0, limit);
  },

  // Get blogs by category
  getBlogsByCategory: (category: string): BlogPost[] => {
    return blogPosts.filter(post => post.category === category);
  },

  // Get blogs by tag
  getBlogsByTag: (tag: string): BlogPost[] => {
    return blogPosts.filter(post => post.tags.includes(tag));
  },

  // Search blogs
  searchBlogs: (query: string): BlogPost[] => {
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.snippet.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery)
    );
  }
};
