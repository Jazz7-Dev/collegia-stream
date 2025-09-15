import { BookOpen, Users, Star, MessageCircle, TrendingUp, Calendar, BarChart3, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const TeacherDashboard = () => {
  const quickStats = [
    {
      label: "Blogs to Review",
      value: 23,
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      label: "Total Students",
      value: 156,
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      label: "Average Rating",
      value: 4.7,
      icon: Star,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      label: "Feedback Received",
      value: 89,
      icon: MessageCircle,
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const pendingBlogs = [
    {
      title: "Quantum Computing Basics",
      author: "Sarah Johnson",
      category: "Tech",
      submitted: "3 hours ago",
      priority: "high"
    },
    {
      title: "Annual Sports Meet Review",
      author: "Mike Chen",
      category: "Sports",
      submitted: "1 day ago",
      priority: "medium"
    },
    {
      title: "Cultural Festival Memories",
      author: "Emma Wilson",
      category: "Events",
      submitted: "2 days ago",
      priority: "low"
    },
    {
      title: "AI in Healthcare Applications",
      author: "David Brown",
      category: "Tech",
      submitted: "3 days ago",
      priority: "medium"
    }
  ];

  const recentFeedback = [
    {
      student: "Alice Smith",
      rating: 5,
      subject: "Computer Science",
      comment: "Excellent teaching methods and clear explanations",
      date: "2 days ago"
    },
    {
      student: "Robert Davis",
      rating: 4,
      subject: "Data Structures",
      comment: "Very helpful during office hours",
      date: "1 week ago"
    },
    {
      student: "Lisa Garcia",
      rating: 5,
      subject: "Algorithms",
      comment: "Makes complex topics easy to understand",
      date: "1 week ago"
    }
  ];

  const upcomingTasks = [
    {
      title: "Grade Midterm Exams",
      due: "Due in 2 days",
      type: "grading"
    },
    {
      title: "Department Meeting",
      due: "Tomorrow 10:00 AM",
      type: "meeting"
    },
    {
      title: "Submit Course Materials",
      due: "Due in 1 week",
      type: "admin"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <DashboardLayout userType="teacher">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Dr. Smith!</h1>
          <p className="text-muted-foreground">Here's your teaching dashboard overview</p>
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
          {/* Pending Blogs for Review */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Blogs Pending Review</span>
                    </CardTitle>
                    <CardDescription>Student submissions waiting for your feedback</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {pendingBlogs.map((blog, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-foreground">{blog.title}</h4>
                        <Badge className={getPriorityColor(blog.priority)}>
                          {blog.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <span>by {blog.author}</span>
                        <Badge variant="secondary">{blog.category}</Badge>
                        <span>{blog.submitted}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Upcoming Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      task.type === 'grading' ? 'bg-primary' :
                      task.type === 'meeting' ? 'bg-secondary' : 'bg-accent'
                    }`}></div>
                    <div className="space-y-1">
                      <h5 className="text-sm font-medium text-foreground">{task.title}</h5>
                      <p className="text-xs text-muted-foreground">{task.due}</p>
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
                  Review Blogs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Student Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Feedback Summary
                </Button>
              </CardContent>
            </Card>

            {/* Rating Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Teaching Performance</CardTitle>
                <CardDescription>Student feedback summary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning">4.7</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Teaching Quality</span>
                    <span>4.8/5</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Communication</span>
                    <span>4.6/5</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Helpfulness</span>
                    <span>4.7/5</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Feedback */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span>Recent Student Feedback</span>
            </CardTitle>
            <CardDescription>Latest reviews from your students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentFeedback.map((feedback, index) => (
                <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium text-foreground">{feedback.student}</h5>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm font-medium">{feedback.rating}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{feedback.subject}</Badge>
                  <p className="text-sm text-muted-foreground italic">"{feedback.comment}"</p>
                  <p className="text-xs text-muted-foreground">{feedback.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;