import { Notice, Course, FacultyMember, Facility, GalleryItem, Testimonial, FAQ } from './types';

export const INSTITUTION_DETAILS = {
  name: 'Pushpendra College of Pharmacy',
  location: 'Ambikapur, Chhattisgarh',
  tagline: 'Shaping Future Pharmacists with Excellence',
  established: '2019',
  approvals: [
    { authority: 'PCI', name: 'Pharmacy Council of India (PCI), New Delhi', logo: '🛡️' },
    { authority: 'CSVTU', name: 'Affiliated to Chhattisgarh Swami Vivekanand Technical University, Bhilai', logo: '🎓' },
    { authority: 'CGDTE', name: 'Approved by Directorate of Technical Education (DTE), Chhattisgarh', logo: '🏛️' }
  ],
  contact: {
    phone: '+91 91316 46112',
    phoneAlt: '+91 70002 91884',
    email: 'pushpendrapharmacy@gmail.com',
    address: 'Pushpendra College of Pharmacy, Darripara, Ambikapur, Surguja, Chhattisgarh - 497001',
    whatsapp: '919131646112',
    mapIframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.442964971765!2d83.18956977530663!3d22.67455827941785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398863f6fb39f60b%3A0xe7a508b98be9031c!2sPushpendra%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin'
  }
};

export const NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for B.Pharm & D.Pharm Academic Session 2026-27',
    date: '2026-07-20',
    category: 'Admission',
    isNew: true,
    description: 'Online & offline registrations are open for Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm). Visit our Darripara campus or apply online via our Admission Enquiry Portal.'
  },
  {
    id: 'n2',
    title: 'PCI Approval Extended & Affiliation Fees Notification',
    date: '2026-07-15',
    category: 'Academic',
    isNew: true,
    description: 'We are pleased to announce that the Pharmacy Council of India (PCI) has successfully renewed the seat approvals for both B.Pharm (100 seats) and D.Pharm (60 seats) for the current session.'
  },
  {
    id: 'n3',
    title: 'Practical Laboratory Examinations Timetable - CSVTU',
    date: '2026-07-10',
    category: 'Exam',
    isNew: false,
    description: 'CSVTU Practical Exams for B.Pharm 2nd and 4th Semester will begin on July 28, 2026. Hall tickets and lab schedules can be collected from the administration desk.'
  },
  {
    id: 'n4',
    title: 'National Pharmacy Week & Pharmacovigilance Seminar',
    date: '2026-06-25',
    category: 'General',
    isNew: false,
    description: 'Pushpendra College of Pharmacy will host a national-level seminar on "Future Advancements in Drug Delivery Systems and Pharmacovigilance" with chief speakers from Raipur Medical College.'
  }
];

export const COURSES: Course[] = [
  {
    id: 'bpharm',
    name: 'Bachelor of Pharmacy (B.Pharm)',
    duration: '4 Years (8 Semesters)',
    eligibility: '10+2 with Physics, Chemistry, and Biology/Mathematics (PCB/PCM) with a minimum of 45% marks (40% for SC/ST/OBC). Must qualify CG PPHT or equivalent state entrance counseling.',
    seats: 100,
    description: 'An advanced undergraduate program focusing on pharmaceutical chemistry, pharmacology, pharmacognosy, and pharmaceutics, preparing students for professional careers in drug research, formulation development, and clinical pharmacy.',
    syllabus: [
      'Human Anatomy & Physiology',
      'Pharmaceutical Analysis & Inorganic Chemistry',
      'Pharmaceutics & Physical Pharmaceutics',
      'Medicinal Chemistry & Organic Chemistry',
      'Pharmacology & Toxicology',
      'Pharmacognosy & Phytochemistry',
      'Biopharmaceutics & Pharmacokinetics',
      'Industrial Pharmacy & Quality Assurance'
    ],
    opportunities: [
      'Pharmaceutical Formulation Research Scientist',
      'Quality Control (QC) & Quality Assurance (QA) Associate',
      'Drug Inspector / Government Pharmacist',
      'Clinical Research Coordinator & Medical Writer',
      'Pharmaceutical Marketing & Product Management'
    ]
  },
  {
    id: 'dpharm',
    name: 'Diploma in Pharmacy (D.Pharm)',
    duration: '2 Years (Annual System)',
    eligibility: '10+2 passing marks with Physics, Chemistry, and Biology or Mathematics (PCB/PCM) from a recognized educational board (CGBSE, CBSE, ICSE).',
    seats: 60,
    description: 'A foundational diploma program designed to provide comprehensive, hands-on knowledge of pharmacy practice, dispensing medicines, pharmacology principles, and community pharmacy management.',
    syllabus: [
      'Pharmaceutics-I & II (Theory & Practical)',
      'Pharmaceutical Chemistry-I & II',
      'Pharmacognosy',
      'Biochemistry & Clinical Pathology',
      'Human Anatomy & Physiology',
      'Health Education & Community Pharmacy',
      'Pharmacology & Toxicology',
      'Pharmaceutical Jurisprudence',
      'Drug Store & Business Management',
      'Hospital & Clinical Pharmacy'
    ],
    opportunities: [
      'Registered Community Pharmacist (Licensed Chemist Store Owner)',
      'Hospital Pharmacist (Government & Private Hospital Dispensaries)',
      'Medical Representative (MR) for Top Pharma Companies',
      'Manufacturing Technical Assistant',
      'Higher Education Entry (Direct 2nd Year B.Pharm Lateral Entry)'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Faculty',
    description: 'Highly qualified professors with M.Pharm and Ph.D degrees, extensive academic background, and real pharmaceutical industry experience.',
    icon: 'GraduationCap'
  },
  {
    title: 'Modern Laboratories',
    description: 'Fully equipped labs for Pharmaceutics, Pharmacognosy, Pharmaceutical Chemistry, and Pharmacology, featuring precision instruments.',
    icon: 'FlaskConical'
  },
  {
    title: 'Automated Library',
    description: 'An expansive collection of over 5,000+ medical journals, standard national textbooks, drug indexes, and computer-assisted digital libraries.',
    icon: 'BookOpen'
  },
  {
    title: 'Practical Training',
    description: 'Structured hospital internship postings and industrial visits to prominent manufacturing plants, building true clinical expertise.',
    icon: 'Activity'
  },
  {
    title: 'Student Support',
    description: 'Dedicated mentorship programs, scholarship guidance for SC/ST/OBC students, and premium hostel accommodations with secure facilities.',
    icon: 'Users'
  },
  {
    title: 'Career Guidance',
    description: 'An active Training and Placement Cell offering personality development, CV-writing guidance, and mock interviews for top pharma recruiters.',
    icon: 'Briefcase'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac1',
    title: 'Pharmaceutics & Formulation Lab',
    description: 'Equipped with tablet compression machines, dissolution test apparatus, disintegration testers, and advanced formulation tools for hands-on tablet and liquid drug manufacturing.',
    icon: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fac2',
    title: 'Pharmacology & Toxicology Suite',
    description: 'Designed for safe physiological testing of drug actions, carrying advanced equipment including kymographs, pole-climbing apparatus, and simulated clinical software.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fac3',
    title: 'Modern Computer Lab',
    description: 'High-speed internet-enabled workstations running pharmaceutical chemistry software, statistical tools, and database search utilities for computational learning.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fac4',
    title: 'Central Library & Reading Hall',
    description: 'A fully automated, air-conditioned workspace housing books, national/international research publications, online journals (DELNET), and quiet reading zones.',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fac5',
    title: 'Interactive Smart Classrooms',
    description: 'Spacious lecture rooms featuring interactive smart panels, multimedia LCD projectors, whiteboards, and ergonomic seating arrangements to foster collaborative learning.',
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fac6',
    title: 'Medicinal Herb Garden',
    description: 'An expansive outdoor botanical garden with over 150 rare medicinal species, enabling direct botanical identification and practical study for pharmacognosy.',
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Devendra Kumar',
    designation: 'Principal / Professor',
    qualification: 'M.Pharm, Ph.D in Pharmaceutical Sciences',
    experience: '16+ Years',
    specialization: 'Novel Drug Delivery Systems & Pharmaceutics',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'f2',
    name: 'Mrs. Shweta Pathak',
    designation: 'Associate Professor',
    qualification: 'M.Pharm in Pharmacology',
    experience: '9+ Years',
    specialization: 'Clinical Neuropharmacology & Drug-Drug Interactions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'f3',
    name: 'Mr. Ritesh Dewangan',
    designation: 'Assistant Professor',
    qualification: 'M.Pharm in Pharmaceutical Chemistry',
    experience: '7 Years',
    specialization: 'Analytical Chemistry, HPLC & Chromatography',
    image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'f4',
    name: 'Ms. Priya Singh',
    designation: 'Assistant Professor / HOD D.Pharm',
    qualification: 'M.Pharm in Pharmacognosy',
    experience: '6 Years',
    specialization: 'Herbal Drug Standardization & Phytochemistry',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'College Main Campus Entrance',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    description: 'Pushpendra College of Pharmacy modern administrative campus building located in Darripara, Ambikapur.'
  },
  {
    id: 'g2',
    title: 'Pharmaceutics Practical Session',
    category: 'Laboratory',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    description: 'Students working with professional apparatus and chemical mixtures inside our fully upgraded pharmaceutical labs.'
  },
  {
    id: 'g3',
    title: 'Automated Central Library Space',
    category: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    description: 'Vast inventory of reference materials, research journals, and computerized study desks for our pharma students.'
  },
  {
    id: 'g4',
    title: 'National Pharmacy Day Seminar',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Guest lecture and scientific presentation contest conducted by renowned clinical pharmacists.'
  },
  {
    id: 'g5',
    title: 'Chemistry and Analysis Equipment',
    category: 'Laboratory',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    description: 'High-precision titration setups and UV-Spectrophotometers in the Pharmaceutical Analysis lab.'
  },
  {
    id: 'g6',
    title: 'Smart Learning Classrooms',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Our standard lecture hall utilizing active interactive displays and digital presentations.'
  },
  {
    id: 'g7',
    title: 'Community Out-Reach Health Camp',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'Our pharmacy students providing counseling and blood pressure checks to the local Ambikapur community.'
  },
  {
    id: 'g8',
    title: 'Dedicated Computer Networking Lab',
    category: 'Library',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    description: 'The digital resource center offering free access to DELNET journals and pharmacoinformatics databases.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sanjeev Mishra',
    role: 'Pharmacist',
    batch: 'B.Pharm, Class of 2024',
    rating: 5,
    content: 'Choosing Pushpendra College of Pharmacy was the best turning point in my life. The rigorous laboratory assignments, supportive faculty, and regular hospital trainings in Ambikapur District Hospital gave me the confidence to excel in state pharmacist recruitments.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Anjali Kerketta',
    role: 'Quality Assurance Associate',
    batch: 'B.Pharm, Class of 2023',
    rating: 5,
    content: 'The industrial visits and guidance from the placement cell helped me secure a position at Alkem Laboratories right after graduation. The smart classrooms and dedicated chemistry labs made complex formulation concepts easy to grasp.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Rohan Dewangan',
    role: 'Retail Pharmacy Owner',
    batch: 'D.Pharm, Class of 2022',
    rating: 5,
    content: 'The D.Pharm curriculum is highly practical. The drug store licensing guidelines, business management training, and pharmaceutical jurisprudence lessons directly helped me open my own successful pharmacy counter in Ambikapur. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'Is Pushpendra College of Pharmacy approved by the Pharmacy Council of India (PCI)?',
    answer: 'Yes, both our Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm) programs are fully approved by the Pharmacy Council of India (PCI), New Delhi, which is mandatory for registering as a licensed Pharmacist.'
  },
  {
    id: 'faq2',
    question: 'Which university is the college affiliated with?',
    answer: 'The B.Pharm and D.Pharm courses are affiliated to the prestigious Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai and approved by the Directorate of Technical Education (DTE), Raipur, Chhattisgarh.'
  },
  {
    id: 'faq3',
    question: 'What is the eligibility criteria for admission in D.Pharm and B.Pharm?',
    answer: 'For both courses, candidates must have passed 10+2 (Higher Secondary) with Physics, Chemistry, and Biology/Mathematics (PCB/PCM) from a recognized board. B.Pharm requires minimum 45% aggregate marks (40% for SC/ST/OBC), and candidates are selected based on merit or CG PPHT state entrance counseling. D.Pharm admissions are strictly based on 10+2 science academic merit.'
  },
  {
    id: 'faq4',
    question: 'Do you offer direct second-year lateral entry admissions?',
    answer: 'Yes! Students who have successfully completed their 2-year Diploma in Pharmacy (D.Pharm) from a PCI-approved institute are eligible for direct admission to the 2nd Year (3rd Semester) of B.Pharm via Lateral Entry counseling conducted by CSVTU.'
  },
  {
    id: 'faq5',
    question: 'Are scholarship facilities available for reserved category students?',
    answer: 'Yes, the college facilitates government post-matric scholarships for SC, ST, OBC, and Minority students under Chhattisgarh State Government guidelines. Eligible candidates receive tuition fee reimbursements directly in their bank accounts.'
  },
  {
    id: 'faq6',
    question: 'What practical exposure is provided at PCP Ambikapur?',
    answer: 'We provide comprehensive hands-on exposure including compulsory 500 hours of practical training in Government and District Hospitals for D.Pharm students, industrial training tours for B.Pharm students, research projects, and active participation in our fully interactive formulation & analysis laboratories.'
  }
];
