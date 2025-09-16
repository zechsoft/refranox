import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  BookOpen,
  DollarSign,
  Calendar,
  ChevronRight,
  Send
} from 'lucide-react';

const Careers = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const whyWorkWithUs = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship and leadership development programs',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Continuous skill enhancement through training, certifications, and workshops',
      color: 'text-green-600', 
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment that values diversity and innovation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards, recognition programs, and competitive compensation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const benefits = [
    'Competitive salary packages',
    'Health insurance coverage',
    'Performance-based bonuses',
    'Professional development allowance',
    'Flexible working arrangements',
    'Transportation allowance',
    'Annual leave and sick leave',
    'Retirement savings plan',
    'Employee assistance program',
    'Team building activities'
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Insulation Engineer',
      department: 'Engineering',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹8-12 LPA',
      postedDate: '2 days ago',
      description: 'Lead complex insulation projects, design thermal solutions, and mentor junior engineers in industrial insulation applications.',
      requirements: [
        'B.Tech/M.Tech in Mechanical/Chemical Engineering',
        '5+ years experience in industrial insulation',
        'Knowledge of thermal analysis software',
        'Project management certification preferred',
        'Strong communication and leadership skills'
      ],
      responsibilities: [
        'Design and review insulation systems for industrial applications',
        'Lead project teams and coordinate with clients',
        'Ensure compliance with safety and quality standards',
        'Mentor and train junior engineering staff',
        'Prepare technical reports and documentation'
      ]
    },
    {
      id: 2,
      title: 'Project Manager - Refractory Works',
      department: 'Project Management',
      location: 'Gujarat (Multiple locations)',
      type: 'Full-time',
      experience: '6-10 years',
      salary: '₹10-15 LPA',
      postedDate: '1 week ago',
      description: 'Manage large-scale refractory projects from planning to completion, ensuring timely delivery and quality execution.',
      requirements: [
        'Engineering degree with PMP certification',
        '6+ years in project management (refractory/insulation)',
        'Experience with large industrial clients',
        'Strong planning and organizational skills',
        'Proficiency in project management tools'
      ],
      responsibilities: [
        'Plan and execute refractory installation projects',
        'Manage project budgets, timelines, and resources',
        'Coordinate with clients, contractors, and internal teams',
        'Ensure adherence to safety and quality protocols',
        'Prepare project reports and presentations'
      ]
    },
    {
      id: 3,
      title: 'Safety Officer',
      department: 'Health & Safety',
      location: 'PAN India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹5-8 LPA',
      postedDate: '3 days ago',
      description: 'Implement and monitor safety protocols across project sites, conduct training, and ensure compliance with safety regulations.',
      requirements: [
        'Diploma/Degree in Safety Engineering or related field',
        '3+ years experience in industrial safety',
        'NEBOSH/IOSH certification preferred',
        'Knowledge of HSE regulations and standards',
        'Strong communication and training skills'
      ],
      responsibilities: [
        'Conduct safety inspections and risk assessments',
        'Deliver safety training programs to workers',
        'Investigate incidents and prepare reports',
        'Ensure compliance with safety regulations',
        'Maintain safety documentation and records'
      ]
    },
    {
      id: 4,
      title: 'Quality Control Inspector',
      department: 'Quality Assurance',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹4-6 LPA',
      postedDate: '5 days ago',
      description: 'Perform quality inspections of insulation work, ensure compliance with specifications, and maintain quality documentation.',
      requirements: [
        'Diploma in Mechanical/Civil Engineering',
        '2+ years experience in quality inspection',
        'Knowledge of insulation materials and techniques',
        'Attention to detail and analytical skills',
        'Basic computer skills and report writing'
      ],
      responsibilities: [
        'Inspect insulation work quality and compliance',
        'Test materials and document results',
        'Prepare quality reports and certificates',
        'Coordinate with project teams on quality issues',
        'Maintain quality control documentation'
      ]
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'Sales & Marketing',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹6-10 LPA',
      postedDate: '1 day ago',
      description: 'Develop new business opportunities, maintain client relationships, and drive sales growth in assigned territories.',
      requirements: [
        'MBA/Engineering degree preferred',
        '3+ years in B2B sales (industrial sector)',
        'Strong communication and presentation skills',
        'Experience with CRM systems',
        'Willingness to travel extensively'
      ],
      responsibilities: [
        'Identify and develop new business opportunities',
        'Build and maintain client relationships',
        'Prepare proposals and negotiate contracts',
        'Achieve monthly and quarterly sales targets',
        'Participate in industry events and exhibitions'
      ]
    },
    {
      id: 6,
      title: 'Trainee Engineer',
      department: 'Engineering',
      location: 'Multiple locations',
      type: 'Full-time',
      experience: 'Fresh Graduate',
      salary: '₹3-5 LPA',
      postedDate: '1 week ago',
      description: 'Entry-level position for fresh graduates to learn industrial insulation engineering through structured training programs.',
      requirements: [
        'B.Tech in Mechanical/Chemical/Civil Engineering',
        'Fresh graduate or 0-1 year experience',
        'Strong academic record and analytical skills',
        'Willingness to learn and work in field conditions',
        'Good communication skills'
      ],
      responsibilities: [
        'Assist senior engineers in project design and execution',
        'Learn insulation techniques and materials',
        'Participate in site inspections and surveys',
        'Prepare technical drawings and documentation',
        'Complete structured training programs'
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Build your career with India's leading industrial insulation company
            </p>
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Work at REFRANOX */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at REFRANOX</h2>
            <p className="text-xl text-gray-600">
              Join a company that values your growth, innovation, and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Employee Benefits & Perks</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in taking care of our employees with comprehensive benefits and a 
                supportive work environment that promotes work-life balance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">
              Explore exciting career opportunities across different departments
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-orange-500" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-orange-500" />
                          {position.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-orange-500" />
                          {position.salary}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {position.department}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted {position.postedDate}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex gap-2">
                      <motion.button
                        onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                        <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-200 ${selectedPosition === position.id ? 'rotate-90' : ''}`} />
                      </motion.button>
                      <motion.button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{position.description}</p>

                  {selectedPosition === position.id && (
                    <motion.div
                      className="mt-6 border-t pt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Send us your application
            </p>
          </motion.div>

          <motion.form
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Position Applied For *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a position</option>
                  {openPositions.map(position => (
                    <option key={position.id} value={position.title}>
                      {position.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Total Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., 3 years in industrial insulation"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Cover Letter / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us why you'd be a great fit for this role..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Upload Resume *</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Application <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Our HR team is here to help you with any questions about career opportunities at REFRANOX.
            </p>
            <div className="space-y-2 text-blue-200">
              <p>📧 careers@refranox.com</p>
              <p>📞 +91-XXX-XXXX-XXX (HR Department)</p>
              <p>🕒 Monday to Friday, 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;