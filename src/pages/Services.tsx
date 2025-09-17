import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Flame, Building2, Volume2, CheckCircle, ArrowRight, Layers, Snowflake, Zap, Wind Award } from 'lucide-react';
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

  const advancedProducts = [
    {
      icon: Layers,
      title: 'Phenolic Foam Insulation',
      description: 'Advanced phenolic foam insulation with superior fire resistance and thermal performance for critical applications.',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Excellent fire resistance properties',
        'Low thermal conductivity',
        'Moisture resistant',
        'Lightweight and easy to install',
        'Long-term thermal stability',
        'Suitable for extreme temperature applications'
      ],
      applications: ['HVAC systems', 'Industrial equipment', 'Marine applications', 'Fire-rated assemblies']
    },
    {
      icon: Shield,
      title: 'Polyisocyanurate (PIR) Insulation',
      description: 'High-performance PIR insulation offering exceptional thermal efficiency and fire safety for demanding industrial environments.',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Superior thermal performance',
        'Excellent fire resistance',
        'Dimensional stability',
        'Low smoke emission',
        'Chemical resistance',
        'Wide temperature range capability'
      ],
      applications: ['Refrigeration systems', 'Process equipment', 'Building insulation', 'Cold storage facilities']
    },
    {
      icon: Snowflake,
      title: 'Polyurethane (PUR) Insulation',
      description: 'Versatile PUR insulation systems providing excellent thermal properties and mechanical strength for various applications.',
      image: 'https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Outstanding thermal insulation',
        'Good mechanical properties',
        'Moisture resistance',
        'Flexible application methods',
        'Energy efficiency optimization',
        'Cost-effective solution'
      ],
      applications: ['Pipeline insulation', 'Tank insulation', 'Building envelope', 'Refrigeration units']
    },
    {
      icon: Zap,
      title: 'Polyolefin (XLPE) Insulation',
      description: 'Cross-linked polyethylene insulation offering excellent electrical properties and chemical resistance for specialized applications.',
      image: 'https://images.pexels.com/photos/5691662/pexels-photo-5691662.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Excellent electrical insulation',
        'Chemical and UV resistance',
        'Flexible and durable',
        'Wide temperature range',
        'Low water absorption',
        'Long service life'
      ],
      applications: ['Electrical systems', 'Cable insulation', 'Pipe insulation', 'Automotive applications']
    },
    {
      icon: Building2,
      title: 'Cellular Glass Insulation',
      description: 'Rigid cellular glass insulation providing permanent thermal protection with zero water absorption and vapor permeability.',
      image: 'https://images.pexels.com/photos/5691663/pexels-photo-5691663.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Zero water absorption',
        'Vapor impermeable',
        'Non-combustible',
        'Dimensionally stable',
        'Chemical resistance',
        'Permanent thermal performance'
      ],
      applications: ['Cryogenic systems', 'Underground piping', 'Roofing systems', 'Industrial equipment']
    },
    {
      icon: Flame,
      title: 'Calcium Silicate Insulation',
      description: 'High-temperature calcium silicate insulation boards and pipes for extreme heat applications in industrial processes.',
      image: 'https://images.pexels.com/photos/5691664/pexels-photo-5691664.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'High temperature resistance (up to 1000°C)',
        'Non-combustible material',
        'Low thermal conductivity',
        'Excellent structural integrity',
        'Asbestos-free composition',
        'Easy machining and installation'
      ],
      applications: ['Furnace insulation', 'Boiler applications', 'High-temperature piping', 'Fire protection systems']
    },
    {
      icon: Wind,
      title: 'Pre-Insulated Duct Systems',
      description: 'Factory-manufactured pre-insulated ductwork using PF or PIR insulation for HVAC and industrial ventilation systems.',
      image: 'https://images.pexels.com/photos/5691665/pexels-photo-5691665.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Factory-controlled quality',
        'Reduced installation time',
        'Consistent thermal performance',
        'Integrated vapor barrier',
        'Custom fabrication available',
        'Energy-efficient design'
      ],
      applications: ['HVAC systems', 'Industrial ventilation', 'Clean room applications', 'Commercial buildings']
    },
    {
      icon: Layers,
      title: 'Roof, Wall & EIFS Systems',
      description: 'Comprehensive building envelope solutions including roof insulation, wall systems, and Exterior Insulation Finishing Systems (EIFS).',
      image: 'https://images.pexels.com/photos/5691666/pexels-photo-5691666.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Complete building envelope solution',
        'Energy efficiency optimization',
        'Weather resistance',
        'Aesthetic finishing options',
        'Thermal bridge elimination',
        'Moisture management systems'
      ],
      applications: ['Commercial buildings', 'Industrial facilities', 'Residential projects', 'Renovation works']
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

      {/* Advanced Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Insulation Products</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge thermal insulation solutions for specialized industrial applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={product.title}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-blue-600 font-medium group-hover:text-orange-600 transition-colors">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thermal Insulation Accessories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thermal Insulation Accessories</h2>
            <p className="text-xl text-gray-600">
              Complete range of tapes, sealants, and accessories for professional insulation installation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5691667/pexels-photo-5691667.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Thermal insulation accessories"
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Professional Installation Accessories</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Aluminum Foil Tapes',
                    'Vapor Barrier Tapes',
                    'Insulation Sealants',
                    'Mechanical Fasteners',
                    'Protective Jacketing',
                    'Weather Barriers',
                    'Joint Sealers',
                    'Adhesive Systems'
                  ].map((accessory, index) => (
                    <div key={accessory} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{accessory}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Why Quality Accessories Matter</h4>
                  <p className="text-blue-800 text-sm">
                    Professional-grade accessories ensure long-term performance, prevent thermal bridging, 
                    and maintain the integrity of your insulation system throughout its service life.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Manufacturing Facility</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Our state-of-the-art manufacturing facility employs cutting-edge technology and 
                  stringent quality control processes to produce world-class thermal insulation products.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>ISO certified manufacturing processes</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Advanced quality testing laboratories</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Automated production lines</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-orange-500 mr-3" />
                    <span>Custom fabrication capabilities</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5691668/pexels-photo-5691668.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advanced manufacturing facility"
                className="rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Leading Thermal Insulation Solutions Provider</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-200">
              From advanced materials to professional installation - we deliver comprehensive thermal insulation 
              solutions for buildings, HVAC systems, and industrial applications across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Request Product Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Installation Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
