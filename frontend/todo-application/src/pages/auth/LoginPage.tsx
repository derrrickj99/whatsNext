import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/user";
import { useNavigate } from "react-router";

type LoginFormValues = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);


  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      console.log("Logging in with:", values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(login({
        sessionId: "Session1",
        userId: "USER1",
        username: "User",
        role: 'dev'
      }))
      navigate('/')
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex pt-5 items-center justify-center">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Label>Email</Label>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label>Password</Label>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

