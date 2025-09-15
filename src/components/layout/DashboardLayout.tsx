import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  MessageCircle, 
  MapPin, 
  Home, 
  Star, 
  BarChart3, 
  Settings, 
  User, 
  LogOut,
  Bell,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'student' | 'teacher';
}

export const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const studentNavItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard/student" },
    { icon: BookOpen, label: "My Blogs", href: "/dashboard/blogs" },
    { icon: MessageCircle, label: "Chat", href: "/dashboard/chat" },
    { icon: Star, label: "Give Feedback", href: "/dashboard/feedback" },
    { icon: MapPin, label: "Campus Map", href: "/dashboard/map" },
    { icon: Home, label: "Hostel Services", href: "/dashboard/hostel" },
  ];

  const teacherNavItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard/teacher" },
    { icon: BookOpen, label: "Review Blogs", href: "/dashboard/review" },
    { icon: Star, label: "My Feedback", href: "/dashboard/ratings" },
    { icon: MessageCircle, label: "Student Chat", href: "/dashboard/chat" },
    { icon: MapPin, label: "Campus Map", href: "/dashboard/map" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  const navItems = userType === 'student' ? studentNavItems : teacherNavItems;
  const userName = userType === 'student' ? 'John Doe' : 'Dr. Smith';
  const userRole = userType === 'student' ? 'Computer Science Student' : 'Professor, Computer Science';

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EduPortal</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-smooth ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start p-2 h-auto">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="gradient-primary text-primary-foreground">
                      {userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left flex-1">
                    <p className="text-sm font-medium text-foreground">{userName}</p>
                    <p className="text-xs text-muted-foreground">{userRole}</p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
              <div className="text-sm text-muted-foreground">
                {userType === 'student' ? 'Student Portal' : 'Teacher Portal'}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-destructive text-destructive-foreground p-0 flex items-center justify-center">
                  3
                </Badge>
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;