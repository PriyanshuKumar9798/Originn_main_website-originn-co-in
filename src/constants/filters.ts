export const STAGES = [
  'Idea Stage',
  'Prototype Stage',
  'Pre-Revenue Stage',
  'Early Revenue Stage',
  'Series A/B/C Stage',
] as const

export const CATEGORIES = [
  'AI & Deep Tech',
  'Healthcare & Life Sciences',
  'FinTech',
  'SaaS & Enterprise Tech',
  'Consumer Tech',
  'Sustainability & Climate Tech',
  'EdTech',
  'Media & Entertainment',
  'Logistics & Supply Chain',
  'Other',
] as const

export const PRODUCT_TYPES = [
  'Physical Product (Hardware)',
  'SaaS (Software as a Service)',
  'Digital Product',
  'Service',
] as const

export const TARGET_MARKETS = [
  'B2C (Business-to-Consumer)',
  'B2B (Business-to-Business)',
  'D2C (Direct-to-Consumer)',
] as const

export const IITs = [
  'IIT Madras','IIT Delhi','IIT Bombay','IIT Kanpur','IIT Kharagpur','IIT Roorkee','IIT Guwahati','IIT Hyderabad','IIT Indore','IIT (BHU) Varanasi','IIT ISM Dhanbad','IIT Gandhinagar','IIT Ropar','IIT Patna','IIT Jodhpur',
] as const

export const NITs = [
  'NIT Tiruchirappalli (Trichy)','NIT Surathkal','NIT Rourkela','NIT Warangal','NIT Calicut','NIT Nagpur (VNIT)','NIT Jaipur (MNIT)','NIT Silchar','NIT Durgapur','NIT Kurukshetra','NIT Allahabad (MNNIT)','NIT Jalandhar (Dr. B R Ambedkar NIT)','NIT Surat (SVNIT)','NIT Patna','NIT Delhi',
] as const

export const IIMs = [
  'IIM Ahmedabad','IIM Bangalore','IIM Kozhikode','IIM Calcutta','IIM Lucknow','IIM Mumbai','IIM Indore','IIM Raipur','IIM Rohtak','IIM Udaipur','IIM Tiruchirappalli (Trichy)','IIM Ranchi','IIM Kashipur','IIM Visakhapatnam','IIM Nagpur',
] as const

export const PRIVATE_ENGINEERING = [
  'Birla Institute of Technology and Science (BITS), Pilani','Vellore Institute of Technology (VIT), Vellore','Manipal Institute of Technology, Manipal','Thapar Institute of Engineering and Technology, Patiala','Amrita Vishwa Vidyapeetham, Coimbatore','Birla Institute of Technology (BIT), Mesra','International Institute of Information Technology (IIIT), Hyderabad','SRM Institute of Science and Technology, Chennai','Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar','Ramaiah Institute of Technology, Bangalore','PSG College of Technology, Coimbatore','Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar','Shanmugha Arts, Science, Technology & Research Academy (SASTRA), Thanjavur','B.M.S. College of Engineering, Bangalore','Sardar Patel College of Engineering (SPCE), Mumbai','The LNM Institute of Information Technology (LNMIIT), Jaipur','JSS Academy of Technical Education, Noida','Galgotias University, Greater Noida','Amity University, Noida','Lovely Professional University (LPU), Jalandhar',
] as const

export const PRIVATE_BUSINESS = [
  'XLRI - Xavier School of Management, Jamshedpur','SP Jain Institute of Management and Research (SPJIMR), Mumbai','Management Development Institute (MDI), Gurgaon','Symbiosis Institute of Business Management (SIBM), Pune','Narsee Monjee Institute of Management Studies (NMIMS), Mumbai','Indian School of Business (ISB), Hyderabad/Mohali','Great Lakes Institute of Management, Chennai','Institute of Management Technology (IMT), Ghaziabad','MICA, Ahmedabad','Goa Institute of Management (GIM), Goa','T. A. Pai Management Institute (TAPMI), Manipal','Xavier Institute of Management, Bhubaneswar (XIMB)','K. J. Somaiya Institute of Management, Mumbai','FORE School of Management, New Delhi','Loyola Institute of Business Administration (LIBA), Chennai','Prin. L. N. Welingkar Institute of Management Development & Research (WeSchool), Mumbai','IRMA, Anand','Birla Institute of Management Technology (BIMTECH), Greater Noida','Amity Business School, Noida','ICFAI Business School (IBS), Hyderabad',
] as const

export const OTHER = 'Other' as const


export const ALL_INSTITUTES = [
  ...IITs,
  ...NITs,
  ...IIMs,
  ...PRIVATE_ENGINEERING,
  ...PRIVATE_BUSINESS,
  OTHER,
] as const

