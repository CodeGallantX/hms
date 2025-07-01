import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Clock, Shield, Phone, Mail, MapPin, ArrowRight, Stethoscope, UserCheck, Building2 } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Comprehensive healthcare services with personalized treatment plans.'
    },
    {
      icon: Users,
      title: 'Expert Doctors',
      description: 'Experienced medical professionals across all specialties.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock medical assistance and emergency care.'
    },
    {
      icon: Shield,
      title: 'Secure Records',
      description: 'Your medical information is protected with the highest security standards.'
    }
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'General Consultation',
      description: 'Comprehensive health checkups and consultations'
    },
    {
      icon: UserCheck,
      title: 'Specialized Care',
      description: 'Expert care in cardiology, neurology, and more'
    },
    {
      icon: Building2,
      title: 'Emergency Services',
      description: '24/7 emergency medical care and ambulance services'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-secondary-900">MedPlus</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Your Health, Our
              <span className="text-primary-600"> Priority</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Experience world-class healthcare with our comprehensive hospital management system. 
              Book appointments, manage prescriptions, and access your medical records all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Appointment
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Why Choose MedPlus?
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare solutions with cutting-edge technology and compassionate care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Comprehensive medical services tailored to meet your healthcare needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {service.description}
                </p>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Have questions? We're here to help you with all your healthcare needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Phone</h3>
              <p className="text-secondary-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email</h3>
              <p className="text-secondary-600">info@medplus.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Address</h3>
              <p className="text-secondary-600">123 Medical Center Dr, Healthcare City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MedPlus</span>
            </div>
            <p className="text-secondary-400 mb-4">
              Providing exceptional healthcare services with compassion and excellence.
            </p>
            <p className="text-secondary-400 text-sm">
              © 2024 MedPlus Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;