import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Building2,
  Clock,
  DollarSign,
} from 'lucide-react';

const stats = [
  {
    name: 'Active Projects',
    value: '12',
    icon: Building2,
    change: '+2.1%',
    changeType: 'positive',
  },
  {
    name: 'In Progress',
    value: '8',
    icon: Clock,
    change: '+1.2%',
    changeType: 'positive',
  },
  {
    name: 'Total Revenue',
    value: '$1.2M',
    icon: DollarSign,
    change: '+12.5%',
    changeType: 'positive',
  },
  {
    name: 'Project Pipeline',
    value: '24',
    icon: BarChart3,
    change: '+4.3%',
    changeType: 'positive',
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-2">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-muted-foreground"> vs last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 cursor-pointer"
              >
                <div>
                  <p className="font-medium">Project {i}</p>
                  <p className="text-sm text-muted-foreground">
                    Last updated 2 hours ago
                  </p>
                </div>
                <span className="text-sm font-medium text-primary">View</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Project Timeline</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-4 rounded-lg border"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="font-medium">Milestone {i}</p>
                  <p className="text-sm text-muted-foreground">Due in 3 days</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}