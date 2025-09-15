import { BookOpen, MessageCircle, MapPin, Home, Star, TrendingUp, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const StudentDashboard = () => {
  const quickStats = [
    {
      label: "Blogs Written",
      value: 8,
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      label: "Average Score",
      value: 8.5,
      icon: Star,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      label: "Feedback Given",
      value: 3,
      icon: MessageCircle,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      label: "Monthly Rank",
      value: 12,
      icon: TrendingUp,
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const recentBlogs = [
    {
      title: "Machine Learning in Modern Applications",
      category: "Tech",
      score: 9.2,
      status: "scored",
      date: "2 days ago"
    },
    {
      title: "Campus Sports Day Highlights",
      category: "Sports",
      score: null,
      status: "pending",
      date: "1 week ago"
    },
    {
      title: "Tech Fest 2024 Review",
      category: "Events",
      score: 8.8,
      status: "scored",
      date: "2 weeks ago"
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Teacher Feedback",
      date: "Due in 3 days",
      type: "feedback"
    },
    {
      title: "CS Department Seminar",
      date: "Tomorrow 2:00 PM",
      type: "event"
    },
    {
      title: "Hostel Room Renewal",
      date: "Due in 1 week",
      type: "admin"
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your college activities</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Blogs */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Recent Blogs</span>
                    </CardTitle>
                    <CardDescription>Your latest blog posts and their scores</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBlogs.map((blog, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{blog.title}</h4>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <Badge variant="secondary">{blog.category}</Badge>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {blog.status === 'scored' ? (
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-success">{blog.score}</div>
                          <div className="text-xs text-muted-foreground">Scored</div>
                        </div>
                      ) : (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Upcoming</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      event.type === 'feedback' ? 'bg-primary' :
                      event.type === 'event' ? 'bg-secondary' : 'bg-accent'
                    }`}></div>
                    <div className="space-y-1">
                      <h5 className="text-sm font-medium text-foreground">{event.title}</h5>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gradient-primary text-primary-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Write New Blog
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Open Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Campus Map
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Home className="w-4 h-4 mr-2" />
                  Hostel Services
                </Button>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Monthly Progress</CardTitle>
                <CardDescription>Your activity this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Blog Posts</span>
                    <span>8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Feedback Given</span>
                    <span>3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Engagement</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;