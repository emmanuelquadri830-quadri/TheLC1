import { Bot, MessageSquare, Search, Code, Palette, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const agents = [
  {
    name: 'Linguist-1',
    role: 'NLP Specialist',
    icon: MessageSquare,
    status: 'Online',
    load: '24%',
    color: 'bg-blue-500',
  },
  {
    name: 'Researcher-X',
    role: 'Data Mining',
    icon: Search,
    status: 'Online',
    load: '68%',
    color: 'bg-indigo-500',
  },
  {
    name: 'DevBot',
    role: 'Code Generation',
    icon: Code,
    status: 'Busy',
    load: '92%',
    color: 'bg-slate-800',
  },
  {
    name: 'Creative-A',
    role: 'Visual Synthesis',
    icon: Palette,
    status: 'Idle',
    load: '0%',
    color: 'bg-pink-500',
  },
  {
    name: 'Global-Sync',
    role: 'Translation',
    icon: Globe,
    status: 'Online',
    load: '12%',
    color: 'bg-emerald-500',
  },
  {
    name: 'Logic-Pro',
    role: 'Reasoning Engine',
    icon: Bot,
    status: 'Online',
    load: '45%',
    color: 'bg-amber-500',
  },
];

export function AgentGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Specialized Agents</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <Card key={agent.name} className="group hover:border-blue-200 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className={`p-2 rounded-lg ${agent.color} bg-opacity-10`}>
                <agent.icon className={`w-4 h-4 ${agent.color.replace('bg-', 'text-')}`} />
              </div>
              <Badge variant={agent.status === 'Busy' ? 'destructive' : 'secondary'} className="text-[10px] font-bold uppercase">
                {agent.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-sm font-bold">{agent.name}</CardTitle>
              <p className="text-xs text-muted-foreground mt-1">{agent.role}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-muted-foreground">
                  <span>Current Load</span>
                  <span>{agent.load}</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${agent.color} transition-all duration-500`} 
                    style={{ width: agent.load }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
