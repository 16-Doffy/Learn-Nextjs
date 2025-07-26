// lib/posts.ts
import { Post } from '../types/posts';

const STORAGE_KEY = 'blog-posts';

// Load posts from localStorage
const loadPosts = (): Post[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save posts to localStorage
const savePosts = (posts: Post[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

// Lấy tất cả bài viết
export const getAllPosts = (): Post[] => {
  const posts = loadPosts();
  return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// Lấy bài viết theo slug (id)
export const getPostBySlug = (slug: string): Post | undefined => {
  const posts = loadPosts();
  return posts.find((post) => post.id === slug);
};

// Tạo bài viết mới
export const createPost = (title: string, content: string): Post => {
  const posts = loadPosts();
  const now = new Date().toISOString();
  const newPost: Post = {
    id: Math.random().toString(36).substring(2, 9),
    title,
    content,
    createdAt: now,
    updatedAt: now,
  };
  posts.push(newPost);
  savePosts(posts);
  return newPost;
};

// Cập nhật bài viết
export const updatePost = (id: string, title: string, content: string): Post | undefined => {
  const posts = loadPosts();
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) return undefined;

  const updatedPost: Post = {
    ...posts[postIndex],
    title,
    content,
    updatedAt: new Date().toISOString(),
  };

  posts[postIndex] = updatedPost;
  savePosts(posts);
  return updatedPost;
};

// Xóa bài viết
export const deletePost = (id: string): boolean => {
  const posts = loadPosts();
  const filteredPosts = posts.filter((post) => post.id !== id);
  const isDeleted = filteredPosts.length !== posts.length;

  if (isDeleted) {
    savePosts(filteredPosts);
  }

  return isDeleted;
};
