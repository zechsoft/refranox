import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Flame, 
  Building2, 
  Volume2, 
  Users, 
  Clock, 
  CheckCircle, 
  MapPin,
  ArrowRight,
  Play
} from 'lucide-react';
import Counter from '../components/Counter';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true });

  const services = [
    {
      icon: Shield,
      title: 'Hot & Cold Insulation',
      description: 'Advanced thermal insulation including PIR, PUR, Phenolic Foam, and Cellular Glass for superior energy efficiency.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Flame,
      title: 'Refractory Lining & Castables',
      description: 'High-temperature resistant materials including Calcium Silicate and advanced refractory systems up to 1000°C.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Building2,
      title: 'Furnace & Boiler Insulation',
      description: 'Complete roof, wall, soffit insulation and EIFS systems for commercial and industrial buildings.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Volume2,
      title: 'Pre-Insulated Duct Systems',
      description: 'Factory-manufactured PF/PIR pre-insulated ductwork for HVAC and industrial ventilation systems.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const industries = [
    'Power Generation',
    'Oil & Gas',
    'Petrochemicals',
    'Steel & Cement'
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Industry-Trained Manpower',
      description: 'Skilled technicians with specialized training in industrial insulation'
    },
    {
      icon: Shield,
      title: 'Safety-First Approach',
      description: 'Comprehensive safety protocols ensuring zero accidents on-site'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting project deadlines without compromising quality'
    },
    {
      icon: CheckCircle,
      title: 'Customized Solutions',
      description: 'Tailored engineering solutions for unique industrial requirements'
    },
    {
      icon: MapPin,
      title: 'PAN-India Presence',
      description: 'Strategic locations across India for quick response and support'
    }
  ];

  const clients = [
    'Reliance Industries',
    'ONGC',
    'Indian Oil',
    'NTPC',
    'Tata Steel',
    'L&T'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Engineering Heat Protection
            <span className="text-orange-500"> That Lasts</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted Experts in Industrial Insulation & Refractory Works
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Explore Services <Play className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Refra</span> + <span className="text-orange-500">Nox</span> = 
              <span className="text-gray-700"> Strength + Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              With decades of experience in industrial insulation and refractory works, REFRANOX delivers 
              cutting-edge thermal solutions that protect your assets, optimize energy efficiency, and 
              ensure operational excellence across diverse industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive industrial insulation and refractory solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Delivering specialized solutions across critical industrial sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl text-center hover:from-orange-500 hover:to-orange-700 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <Counter end={25} duration={2} />+
              </div>
              <p className="text-xl">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <Counter end={500} duration={2} />+
              </div>
              <p className="text-xl">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <Counter end={100} duration={2} />+
              </div>
              <p className="text-xl">Satisfied Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">
                <Counter end={15} duration={2} />
              </div>
              <p className="text-xl">States Presence</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose REFRANOX</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for industrial insulation excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Logo Strip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-gray-700">{client}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Discuss Your Next Project</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Ready to protect your industrial assets with world-class insulation solutions? 
              Our experts are here to help.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;