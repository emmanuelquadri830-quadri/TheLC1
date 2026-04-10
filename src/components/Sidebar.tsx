import { LayoutDashboard, Users, BrainCircuit, Workflow, Settings, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { icon: LayoutDashboard, label: 'Orchestrator', active: true },
  { icon: Users, label: 'Agents', active: false },
  { icon: BrainCircuit, label: 'Reasoning', active: false },
  { icon: Workflow, label: 'Workflows', active: false },
];

const secondaryItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Support' },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/30 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">Aether AI</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-3 px-3 py-2 h-10',
                item.active && 'bg-secondary font-medium'
              )}
            >
              <item.icon className={cn('w-4 h-4', item.active ? 'text-primary' : 'text-muted-foreground')} />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 px-3 py-2 h-10 text-muted-foreground"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3 px-3 py-2 h-10 text-destructive hover:text-destructive hover:bg-destructive/10">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
