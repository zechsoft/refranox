import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Flame, Building2, Volume2, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  const services = [
    {
      icon: Shield,
      title: 'Hot & Cold Insulation',
      subtitle: 'Thermal Protection Solutions',
      description: 'Comprehensive thermal insulation services for pipelines, tanks, and equipment ensuring optimal energy efficiency and temperature control across industrial applications.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Pipeline insulation for oil, gas, and chemical lines',
        'Tank and vessel insulation for temperature maintenance',
        'Equipment insulation for boilers, exchangers, and reactors',
        'Energy-efficient materials reducing operational costs',
        'Weather-resistant external cladding systems',
        'Custom solutions for extreme temperature applications'
      ],
      benefits: [
        'Energy Efficiency - Reduce heat loss and gain significantly',
        'Asset Protection - Prevent corrosion and extend equipment life',
        'Temperature Control - Maintain optimal process conditions',
        'Cost Savings - Lower energy consumption and maintenance costs'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-blue-800'
    },
    {
      icon: Flame,
      title: 'Refractory Lining & Castables',
      subtitle: 'High-Temperature Solutions',
      description: 'Advanced refractory solutions including brick lining, gunning, ceramic applications, and castable installations designed to withstand extreme temperatures and harsh industrial conditions.',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'High-temperature refractory brick installation',
        'Monolithic refractory gunning and ramming',
        'Ceramic fiber blanket and board applications',
        'Castable refractory lining for furnaces',
        'Specialized shapes and precast elements',
        'Emergency repair and maintenance services'
      ],
      benefits: [
        'High Temperature Resistance - Withstand temperatures up to 1800°C',
        'Long Service Life - Durable materials reducing replacement frequency',
        'Thermal Shock Resistance - Handle rapid temperature changes',
        'Chemical Resistance - Protect against corrosive environments'
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradientFrom: 'from-red-600',
      gradientTo: 'to-red-800'
    },
    {
      icon: Building2,
      title: 'Furnace & Boiler Insulation',
      subtitle: 'Industrial Heating Systems',
      description: 'Specialized insulation services for furnaces, boilers, and heating systems including shutdown maintenance, repairs, and upgrades to maximize efficiency and extend equipment life.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Furnace lining and insulation installation',
        'Boiler insulation and lagging services',
        'Shutdown maintenance and inspection',
        'Emergency repair and restoration',
        'Upgrade and modernization services',
        'Performance optimization consulting'
      ],
      benefits: [
        'Extended Equipment Life - Reduce thermal stress and wear',
        'Minimize Downtime - Quick and efficient service delivery',
        'Improved Efficiency - Enhanced heat retention and performance',
        'Safety Enhancement - Better working conditions and protection'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradientFrom: 'from-orange-600',
      gradientTo: 'to-orange-800'
    },
    {
      icon: Volume2,
      title: 'Acoustic & Duct Insulation',
      subtitle: 'Noise Control & HVAC Solutions',
      description: 'Comprehensive acoustic insulation and HVAC duct insulation services for noise control, worker comfort, and compliance with environmental regulations in industrial facilities.',
      image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'HVAC duct insulation and lagging',
        'Industrial noise control solutions',
        'Acoustic barriers and enclosures',
        'PEB structure insulation',
        'Vibration damping systems',
        'Air conditioning system insulation'
      ],
      benefits: [
        'Worker Comfort - Reduce noise levels for better working conditions',
        'Regulatory Compliance - Meet environmental noise standards',
        'Energy Efficiency - Prevent condensation and heat loss in ducts',
        'Productivity Enhancement - Improved work environment quality'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-green-800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive industrial insulation and refractory solutions tailored to your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeService === index
                      ? `border-orange-500 ${service.bgColor}`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    activeService === index ? service.bgColor : 'bg-gray-50'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      activeService === index ? service.color : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{service.title}</h3>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center mb-4">
                {React.createElement(services[activeService].icon, {
                  className: `h-12 w-12 ${services[activeService].color} mr-4`
                })}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">{services[activeService].title}</h2>
                  <p className="text-lg text-gray-600">{services[activeService].subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            key={`benefits-${activeService}`}
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[activeService].benefits.map((benefit, index) => {
                const [title, description] = benefit.split(' - ');
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${services[activeService].gradientFrom} ${services[activeService].gradientTo} text-white p-6 rounded-xl`}
                  >
                    <h4 className="font-bold text-lg mb-2">{title}</h4>
                    <p className="text-gray-100">{description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              Systematic approach ensuring quality delivery from consultation to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding requirements and site assessment' },
              { step: '02', title: 'Design', desc: 'Custom engineering solutions and material selection' },
              { step: '03', title: 'Planning', desc: 'Detailed project planning and resource allocation' },
              { step: '04', title: 'Execution', desc: 'Professional installation with safety protocols' },
              { step: '05', title: 'Quality Check', desc: 'Testing, inspection, and final approval' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
                {index < 4 && (
                  <ArrowRight className="h-6 w-6 text-orange-500 absolute top-8 -right-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              Get professional consultation and customized solutions for your industrial insulation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;