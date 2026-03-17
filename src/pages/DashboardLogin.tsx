import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const loginSchema = z.object({
  serviceNumber: z.string().min(1, 'Service number is required').max(20),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

interface DashboardLoginProps {
  onSuccess: (serviceNumber: string) => void;
}

export function DashboardLogin({ onSuccess }: DashboardLoginProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      serviceNumber: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Hardcoded validation: serviceNumber="CCN-25-015" + password="Mj25-015medic"
      if (data.serviceNumber !== 'CCN-25-015' || data.password !== 'Mj25-015medic') {
        throw new Error('Invalid credentials');
      }
      console.log('Dashboard login successful:', data.serviceNumber);
      toast({
        title: 'Access Granted',
        description: `Welcome to Dashboard, Service Number: ${data.serviceNumber}`,
      });
      onSuccess(data.serviceNumber);
    } catch (error) {
      toast({
        title: 'Access Denied',
        description: 'Invalid service number or password',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-navy">Dashboard Access</CardTitle>
          <CardDescription>Enter your service number and password to view account balances</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="serviceNumber">Service Number</Label>
              <Input
                id="serviceNumber"
                {...form.register('serviceNumber')}
                placeholder="e.g. CCN-25-015"
              />
              {form.formState.errors.serviceNumber && (
                <p className="text-sm text-destructive">{form.formState.errors.serviceNumber.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...form.register('password')}
                placeholder="Enter your password"
              />
              {form.formState.errors.password && (
                <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-orange hover:bg-orange-dark" disabled={loading}>
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

