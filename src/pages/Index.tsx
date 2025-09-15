import { ArrowRight, BookOpen, Users, MessageCircle, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-college.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Blog & Learning",
      description: "Share knowledge, create blogs, and get feedback from teachers",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Teacher Feedback",
      description: "Provide monthly feedback and help improve education quality",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Connect instantly with teachers and classmates",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Campus Navigation",
      description: "Interactive campus map with building information",
      color: "text-warning"
    },
    {
      icon: Home,
      title: "Hostel Management",
      description: "Room allocation, mess feedback, and meal pre-ordering",
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduPortal</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </Link>
            <Link to="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </Link>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-smooth">
              Login
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="gradient-primary text-primary-foreground shadow-elegant">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Your Complete
                  <span className="text-primary block">College Portal</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect, learn, and manage your college life with our comprehensive platform. 
                  From blogs to campus navigation, everything you need in one place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="gradient-primary text-primary-foreground shadow-elegant w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Active Students: 2,500+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Faculty: 150+</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Modern college campus" 
                className="relative z-10 rounded-3xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for modern college life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-secondary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your College Experience?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students and faculty already using EduPortal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="gradient-primary text-primary-foreground shadow-elegant">
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Login Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EduPortal</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 EduPortal. Empowering education through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;