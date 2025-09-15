import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent, role: 'student' | 'teacher') => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      toast.success(`Welcome back! Logging in as ${role}`);
      navigate(role === 'student' ? '/dashboard/student' : '/dashboard/teacher');
      setIsLoading(false);
    }, 1500);
  };

  const LoginForm = ({ role }: { role: 'student' | 'teacher' }) => (
    <form onSubmit={(e) => handleLogin(e, role)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`${role}-email`}>Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${role}-email`}
            type="email"
            placeholder={`Enter your ${role} email`}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`${role}-password`}>Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${role}-password`}
            type="password"
            placeholder="Enter your password"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id={`${role}-remember`} className="rounded" />
          <Label htmlFor={`${role}-remember`} className="text-sm">Remember me</Label>
        </div>
        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button 
        type="submit" 
        className="w-full gradient-primary text-primary-foreground shadow-elegant"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : `Sign in as ${role}`}
      </Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-smooth">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-elegant">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-base">
                Sign in to your EduPortal account
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Student</span>
                </TabsTrigger>
                <TabsTrigger value="teacher" className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Teacher</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <LoginForm role="student" />
              </TabsContent>

              <TabsContent value="teacher">
                <LoginForm role="teacher" />
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;