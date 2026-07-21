export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Academic' | 'Exam' | 'General';
  isNew: boolean;
  pdfUrl?: string;
  description?: string;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  seats: number;
  description: string;
  syllabus: string[];
  opportunities: string[];
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  image: string;
  specialization?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Laboratory' | 'Library' | 'Events';
  image: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  rating: number;
  content: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
