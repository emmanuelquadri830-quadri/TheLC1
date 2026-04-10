import { Sidebar } from './components/Sidebar';
import { OrchestrationLayer } from './components/OrchestrationLayer';
import { AgentGrid } from './components/AgentGrid';
import { ReasoningPanel } from './components/ReasoningPanel';
import { WorkflowList } from './components/WorkflowList';
import { Search, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

export default function App() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Sidebar />
        
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 border-b bg-white/50 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search agents, workflows, or reasoning logs..." 
                  className="pl-10 bg-slate-100/50 border-none focus-visible:ring-1 focus-visible:ring-blue-500/50 h-9 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white" />
              </Button>
              <Separator orientation="vertical" className="h-6 mx-1" />
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold leading-none">Emmanuel Q.</p>
                  <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">System Admin</p>
                </div>
                <Avatar className="h-9 w-9 border-2 border-blue-50">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>EQ</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 space-y-10">
            {/* Hero Section */}
            <section className="space-y-6">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight">System Orchestration</h1>
                <p className="text-muted-foreground">Monitoring modular intelligence and agent coordination paths.</p>
              </div>
              <OrchestrationLayer />
            </section>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              <div className="xl:col-span-2 space-y-10">
                <AgentGrid />
              </div>
              
              <aside className="space-y-10">
                <div className="p-6 rounded-3xl bg-blue-50/30 border border-blue-100/50">
                  <ReasoningPanel />
                </div>
                <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100">
                  <WorkflowList />
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
