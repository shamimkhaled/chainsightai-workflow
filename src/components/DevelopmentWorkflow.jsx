import React, { useState } from 'react';
import { Calendar, GitBranch, CheckCircle, Clock, AlertCircle, Play, Code, Palette, Server, TestTube, Rocket } from 'lucide-react';

const DevelopmentWorkflow = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 'backend', name: 'Backend Developer', icon: Server, color: 'blue', person: 'Django/Python Engineer' },
    { id: 'frontend', name: 'Frontend Developer', icon: Code, color: 'purple', person: 'React/JS Engineer' },
    { id: 'uiux', name: 'UI/UX Designer', icon: Palette, color: 'pink', person: 'Product Designer' },
    { id: 'devops', name: 'DevOps Engineer', icon: Rocket, color: 'green', person: 'Infrastructure Engineer' },
    { id: 'qa', name: 'QA Engineer', icon: TestTube, color: 'orange', person: 'Quality Assurance' },
  ];

  const weeks = [
    {
      week: 1,
      phase: 'Sprint 1: Foundation & Setup',
      tasks: {
        backend: [
          { name: 'Django project setup & environment', status: 'completed', hours: 8 },
          { name: 'Database schema design (Contracts, Entities, Risks)', status: 'completed', hours: 12 },
          { name: 'User authentication API (JWT)', status: 'in-progress', hours: 8 },
        ],
        frontend: [
          { name: 'React project setup (Vite/CRA)', status: 'completed', hours: 4 },
          { name: 'Tailwind CSS configuration', status: 'completed', hours: 4 },
          { name: 'Component library structure', status: 'in-progress', hours: 8 },
        ],
        uiux: [
          { name: 'Competitive analysis & research', status: 'completed', hours: 8 },
          { name: 'Landing page wireframes', status: 'completed', hours: 12 },
          { name: 'Design system creation', status: 'in-progress', hours: 8 },
        ],
        devops: [
          { name: 'DigitalOcean/AWS infrastructure planning', status: 'completed', hours: 8 },
          { name: 'Docker setup for Django & React', status: 'in-progress', hours: 8 },
          { name: 'GitHub Actions CI/CD pipeline design', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Test plan documentation', status: 'in-progress', hours: 8 },
          { name: 'Test environment setup', status: 'pending', hours: 8 },
        ],
      }
    },
    {
      week: 2,
      phase: 'Sprint 1: Foundation & Setup',
      tasks: {
        backend: [
          { name: 'Contract upload API (file handling)', status: 'pending', hours: 12 },
          { name: 'PDF parsing integration (PyPDF2/pdfplumber)', status: 'pending', hours: 12 },
          { name: 'PostgreSQL models & migrations', status: 'pending', hours: 8 },
        ],
        frontend: [
          { name: 'Dashboard layout implementation', status: 'pending', hours: 12 },
          { name: 'Authentication pages (Login/Signup)', status: 'pending', hours: 8 },
          { name: 'File upload component', status: 'pending', hours: 8 },
        ],
        uiux: [
          { name: 'Dashboard UI mockups (Figma)', status: 'pending', hours: 16 },
          { name: 'Landing page high-fidelity designs', status: 'pending', hours: 12 },
        ],
        devops: [
          { name: 'GitHub Actions CI/CD setup', status: 'pending', hours: 12 },
          { name: 'Staging environment deployment', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Unit test framework setup (pytest)', status: 'pending', hours: 8 },
          { name: 'API testing with Postman', status: 'pending', hours: 8 },
        ],
      }
    },
    {
      week: 3,
      phase: 'Sprint 2: Core Features - Part 1',
      tasks: {
        backend: [
          { name: 'NLP integration for clause extraction', status: 'pending', hours: 16 },
          { name: 'Entity extraction API (spaCy/Transformers)', status: 'pending', hours: 16 },
          { name: 'Risk scoring algorithm implementation', status: 'pending', hours: 12 },
        ],
        frontend: [
          { name: 'Contract list view with filters', status: 'pending', hours: 12 },
          { name: 'Contract detail modal', status: 'pending', hours: 12 },
          { name: 'Risk dashboard charts (Recharts)', status: 'pending', hours: 12 },
        ],
        uiux: [
          { name: 'Chat interface design', status: 'pending', hours: 12 },
          { name: 'Risk visualization mockups', status: 'pending', hours: 8 },
          { name: 'Icon set & illustrations', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Redis cache setup', status: 'pending', hours: 8 },
          { name: 'DigitalOcean Spaces/AWS S3 for file storage', status: 'pending', hours: 8 },
          { name: 'Database backup automation', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Backend API unit testing', status: 'pending', hours: 12 },
          { name: 'Postman collection creation', status: 'pending', hours: 12 },
        ],
      }
    },
    {
      week: 4,
      phase: 'Sprint 2: Core Features - Part 1',
      tasks: {
        backend: [
          { name: 'RAG system implementation (LangChain)', status: 'pending', hours: 20 },
          { name: 'Vector database setup (Pinecone/Weaviate)', status: 'pending', hours: 12 },
          { name: 'OpenAI API integration', status: 'pending', hours: 12 },
        ],
        frontend: [
          { name: 'AI Chat interface implementation', status: 'pending', hours: 16 },
          { name: 'Real-time message streaming', status: 'pending', hours: 12 },
          { name: 'Citation/source display', status: 'pending', hours: 8 },
        ],
        uiux: [
          { name: 'Landing page final designs', status: 'pending', hours: 16 },
          { name: 'Marketing site structure', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Load balancer configuration', status: 'pending', hours: 8 },
          { name: 'SSL/TLS certificate setup', status: 'pending', hours: 4 },
          { name: 'Basic monitoring setup', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Integration testing', status: 'pending', hours: 16 },
          { name: 'Security testing basics', status: 'pending', hours: 8 },
        ],
      }
    },
    {
      week: 5,
      phase: 'Sprint 3: Core Features - Part 2',
      tasks: {
        backend: [
          { name: 'Kharon API integration (sanctions)', status: 'pending', hours: 12 },
          { name: 'Sayari API integration (supply chain)', status: 'pending', hours: 12 },
          { name: 'Risk signal aggregation logic', status: 'pending', hours: 12 },
          { name: 'Compliance checklist API', status: 'pending', hours: 8 },
        ],
        frontend: [
          { name: 'Supply chain graph visualization (D3.js)', status: 'pending', hours: 16 },
          { name: 'Risk alerts dashboard', status: 'pending', hours: 12 },
          { name: 'Entity detail panels', status: 'pending', hours: 8 },
        ],
        uiux: [
          { name: 'Graph visualization design refinement', status: 'pending', hours: 8 },
          { name: 'Alert notification designs', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Auto-scaling configuration', status: 'pending', hours: 8 },
          { name: 'CDN setup for static assets', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Manual end-to-end testing', status: 'pending', hours: 16 },
          { name: 'Performance testing', status: 'pending', hours: 12 },
        ],
      }
    },
    {
      week: 6,
      phase: 'Sprint 3: Core Features - Part 2',
      tasks: {
        backend: [
          { name: 'Sentiment analysis API', status: 'pending', hours: 12 },
          { name: 'Notification system (email/in-app)', status: 'pending', hours: 12 },
          { name: 'Export functionality (PDF/CSV)', status: 'pending', hours: 8 },
          { name: 'API rate limiting & throttling', status: 'pending', hours: 8 },
        ],
        frontend: [
          { name: 'Landing page implementation', status: 'pending', hours: 20 },
          { name: 'Compliance checklist UI', status: 'pending', hours: 12 },
          { name: 'Monitoring dashboard', status: 'pending', hours: 12 },
        ],
        uiux: [
          { name: 'About/Features page designs', status: 'pending', hours: 12 },
          { name: 'Pricing page mockups', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Production environment setup', status: 'pending', hours: 12 },
          { name: 'Backup & disaster recovery plan', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Cross-browser testing', status: 'pending', hours: 12 },
          { name: 'Mobile responsiveness testing', status: 'pending', hours: 12 },
        ],
      }
    },
    {
      week: 7,
      phase: 'Sprint 4: Polish & Landing',
      tasks: {
        backend: [
          { name: 'API documentation (Swagger/OpenAPI)', status: 'pending', hours: 12 },
          { name: 'Performance optimization', status: 'pending', hours: 12 },
          { name: 'Bug fixes from QA', status: 'pending', hours: 16 },
        ],
        frontend: [
          { name: 'About/Pricing pages implementation', status: 'pending', hours: 16 },
          { name: 'Animations & micro-interactions', status: 'pending', hours: 12 },
          { name: 'Accessibility improvements (WCAG)', status: 'pending', hours: 12 },
        ],
        uiux: [
          { name: 'Final design QA', status: 'pending', hours: 8 },
          { name: 'Marketing assets (logos, banners)', status: 'pending', hours: 8 },
          { name: 'Video demo storyboard', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Security hardening', status: 'pending', hours: 12 },
          { name: 'Performance tuning', status: 'pending', hours: 8 },
          { name: 'Production deployment rehearsal', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'User acceptance testing (UAT)', status: 'pending', hours: 16 },
          { name: 'Load testing', status: 'pending', hours: 12 },
          { name: 'Bug regression testing', status: 'pending', hours: 12 },
        ],
      }
    },
    {
      week: 8,
      phase: 'Sprint 4: Launch Prep & Deployment',
      tasks: {
        backend: [
          { name: 'Final security audit', status: 'pending', hours: 8 },
          { name: 'Database optimization', status: 'pending', hours: 8 },
          { name: 'Production data migration scripts', status: 'pending', hours: 8 },
        ],
        frontend: [
          { name: 'Final bug fixes', status: 'pending', hours: 12 },
          { name: 'SEO optimization', status: 'pending', hours: 8 },
          { name: 'Analytics integration (GA4)', status: 'pending', hours: 4 },
        ],
        uiux: [
          { name: 'Launch checklist review', status: 'pending', hours: 4 },
          { name: 'User onboarding flow documentation', status: 'pending', hours: 8 },
        ],
        devops: [
          { name: 'Production deployment', status: 'pending', hours: 12 },
          { name: 'DNS & domain configuration', status: 'pending', hours: 4 },
          { name: 'Post-launch monitoring setup', status: 'pending', hours: 8 },
          { name: 'Rollback plan testing', status: 'pending', hours: 8 },
        ],
        qa: [
          { name: 'Production smoke testing', status: 'pending', hours: 8 },
          { name: 'Post-launch monitoring', status: 'pending', hours: 8 },
          { name: 'Bug hotfix support', status: 'pending', hours: 8 },
        ],
      }
    },
  ];

  const milestones = [
    { week: 2, title: 'Foundation Complete', description: 'Infrastructure, auth, and basic UI ready' },
    { week: 4, title: 'Core Features MVP', description: 'Contract upload, RAG chat, basic analysis working' },
    { week: 6, title: 'Full Feature Set', description: 'All integrations, landing page, monitoring complete' },
    { week: 8, title: 'Production Launch', description: 'App deployed and live for users' },
  ];

  const StatusBadge = ({ status }) => {
    const config = {
      completed: { color: 'green', icon: CheckCircle, label: 'Done' },
      'in-progress': { color: 'blue', icon: Clock, label: 'In Progress' },
      pending: { color: 'gray', icon: AlertCircle, label: 'Pending' },
    };
    const { color, icon: Icon, label } = config[status];
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
        <Icon className="w-3 h-3" />
        {label}
      </span>
    );
  };

  const calculateProgress = (tasks) => {
    const allTasks = Object.values(tasks).flat();
    const completed = allTasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / allTasks.length) * 100);
  };

  const getTotalHours = (role) => {
    return weeks.reduce((total, week) => {
      const roleTasks = week.tasks[role] || [];
      return total + roleTasks.reduce((sum, task) => sum + task.hours, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        <header className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GitBranch className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Chainsight AI Development Pipeline & Budget Overview</h1>
          </div>
          <p className="text-base md:text-lg text-gray-600">8-Week Sprint Timeline with Role-Based Task Breakdown</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Duration: 8 Weeks</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {roles.map(role => {
            const RoleIcon = role.icon;
            const totalHours = getTotalHours(role.id);
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
                className={`p-3 md:p-4 rounded-lg border-2 transition ${
                  selectedRole === role.id
                    ? `bg-${role.color}-50 border-${role.color}-500`
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <RoleIcon className={`w-6 h-6 md:w-8 md:h-8 text-${role.color}-600 mx-auto mb-2`} />
                <h3 className="font-bold text-gray-900 text-sm mb-1">{role.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{role.person}</p>
                <p className="text-xs font-medium text-gray-900">{totalHours}h total</p>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Timeline View</h2>
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              <span className="text-xs md:text-sm font-medium text-gray-600">Week 1 Active</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            {weeks.map((week, idx) => {
              const isMilestone = milestones.find(m => m.week === week.week);
              const progress = calculateProgress(week.tasks);
              
              return (
                <div key={week.week} className="relative pl-8 pb-8">
                  <div className={`absolute left-0 w-4 h-4 rounded-full -ml-1.5 ${
                    week.week === 1 ? 'bg-green-500' : 'bg-gray-300'
                  } border-4 border-white`}></div>
                  
                  <button
                    onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}
                    className="w-full text-left bg-gray-50 rounded-lg p-3 md:p-4 hover:bg-gray-100 transition"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900">Week {week.week}</h3>
                        <p className="text-xs md:text-sm text-gray-600">{week.phase}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl md:text-2xl font-bold text-blue-600">{progress}%</div>
                        <p className="text-xs text-gray-500">Complete</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </button>

                  {isMilestone && (
                    <div className="mt-3 ml-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        <div>
                          <p className="font-bold text-yellow-900 text-sm">{isMilestone.title}</p>
                          <p className="text-xs text-yellow-700">{isMilestone.description}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedWeek === week.week && (
                    <div className="mt-4 space-y-4">
                      {roles.map(role => {
                        if (selectedRole && selectedRole !== role.id) return null;
                        const tasks = week.tasks[role.id] || [];
                        if (tasks.length === 0) return null;

                        const RoleIcon = role.icon;
                        const totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);

                        return (
                          <div key={role.id} className={`bg-${role.color}-50 rounded-lg p-3 md:p-4 border border-${role.color}-200`}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3">
                              <div className="flex items-center gap-2">
                                <RoleIcon className={`w-4 h-4 md:w-5 md:h-5 text-${role.color}-600`} />
                                <h4 className="font-bold text-gray-900 text-sm md:text-base">{role.name}</h4>
                              </div>
                              <span className="text-xs md:text-sm text-gray-600 sm:ml-auto">{totalHours}h</span>
                            </div>
                            <div className="space-y-2">
                              {tasks.map((task, taskIdx) => (
                                <div key={taskIdx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-2 md:p-3 rounded gap-2">
                                  <div className="flex-1">
                                    <p className="text-xs md:text-sm font-medium text-gray-900">{task.name}</p>
                                    <p className="text-xs text-gray-500 mt-1">{task.hours} hours estimated</p>
                                  </div>
                                  <StatusBadge status={task.status} />
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Key Milestones</h2>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-100 border-2 border-yellow-500 flex items-center justify-center text-yellow-700 font-bold text-xs md:text-sm">
                    {milestone.week}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-yellow-200 my-1"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">{milestone.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { category: 'Backend', items: ['Django 4.2', 'Django REST', 'PostgreSQL', 'Redis', 'Celery'] },
              { category: 'Frontend', items: ['React 18', 'Tailwind CSS', 'Recharts', 'D3.js', 'Axios'] },
              { category: 'AI/ML', items: ['OpenAI API', 'LangChain', 'spaCy', 'Pinecone', 'Transformers'] },
              { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'DigitalOcean/AWS'] },
              { category: 'Testing', items: ['Postman', 'Unit Testing'] },
            ].map((stack, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{stack.category}</h3>
                <ul className="space-y-1">
                  {stack.items.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-700">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">CI/CD Pipeline</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {[
              { step: 'Code Push', icon: Code, color: 'blue' },
              { step: 'Build', icon: Server, color: 'purple' },
              { step: 'Test', icon: TestTube, color: 'orange' },
              { step: 'Stage', icon: Rocket, color: 'yellow' },
              { step: 'Deploy', icon: CheckCircle, color: 'green' },
            ].map((stage, idx) => {
              const StageIcon = stage.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="text-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-${stage.color}-100 flex items-center justify-center mx-auto mb-2`}>
                      <StageIcon className={`w-6 h-6 md:w-8 md:h-8 text-${stage.color}-600`} />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{stage.step}</p>
                  </div>
                  {idx < 4 && (
                    <div className="flex-1 h-0.5 bg-gray-300 mx-2 hidden sm:block"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="p-3 bg-gray-50 rounded">
              <p className="font-medium text-gray-900 mb-1">Automated Testing</p>
              <p className="text-gray-600">Unit tests on every PR via GitHub Actions</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="font-medium text-gray-900 mb-1">Staging Preview</p>
              <p className="text-gray-600">Auto-deploy to staging on merge</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="font-medium text-gray-900 mb-1">Production Deploy</p>
              <p className="text-gray-600">Manual approval with rollback</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Launch Readiness Checklist</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'All unit tests passing (>80% coverage)',
              'Security audit completed',
              'Performance benchmarks met (<3s load time)',
              'Documentation complete (API + User guides)',
              'Staging environment fully tested',
              'Rollback plan documented and tested',
              'Basic monitoring & error tracking configured',
              'DNS & SSL certificates configured',
              'Database backups automated',
              'Privacy policy & terms of service ready',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded">
                <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Cost Breakdown & Budget</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-900 mb-2">
              <strong>Note:</strong> Sayari and Kharon API pricing varies significantly based on usage volume, data access levels, and contract terms. 
              Contact vendors directly for custom quotes. Base costs below exclude these APIs.
            </p>
            <p className="text-sm text-blue-900">
              <strong>Proprietary Data:</strong> If you choose to build your own datasets through web scraping, data partnerships, or manual collection instead of relying solely on third-party APIs, 
              expect additional costs of <strong>$2,000-15,000+</strong> depending on data scope, quality requirements, and ongoing maintenance. This creates competitive advantage but requires significant investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phase 1: MVP (Foundation)</h3>
                <p className="text-sm text-gray-600">8 Weeks - Starter Tier</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Development</span>
                  <span className="font-bold text-gray-900">$5,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Infrastructure Setup</span>
                  <span className="font-bold text-gray-900">$500</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Third-Party APIs (Sayari/Kharon/Data API 2 months) + Data Collection</span>
                  <span className="font-bold text-gray-900">$400-2,000</span>
                </div>
                <div className="pt-2 bg-yellow-50 rounded p-3 border border-yellow-200">
                  <p className="text-xs text-yellow-800 mb-2">
                    <strong>⚠️ Proprietary Data Collection:</strong> If building your own dataset instead of relying solely on third-party APIs, data collection costs can significantly increase.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-xs">Additional data sourcing, scraping, validation</span>
                    <span className="font-bold text-yellow-900">+$500-3,000</span>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total Initial Cost</span>
                    <span className="text-2xl font-bold text-purple-600">$5,900-7,500</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 italic">Or $7,900-17,500 with proprietary data collection</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monthly Operating (Starter)</h3>
                <p className="text-sm text-gray-600">After Launch</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">DigitalOcean/AWS</span>
                  <span className="font-medium text-gray-900">$50-150</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">PostgreSQL (Managed)</span>
                  <span className="font-medium text-gray-900">$15-20</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Pinecone (Vector DB)</span>
                  <span className="font-medium text-gray-900">$50</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">OpenAI API</span>
                  <span className="font-medium text-gray-900">$50-200</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Sayari/Kharon/Data API</span>
                  <span className="font-medium text-gray-900">Contact for pricing</span>
                </div>
                <div className="flex justify-between py-1 border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">Monthly Recurring (Base)</span>
                  <span className="text-xl font-bold text-purple-600">~$165-420</span>
                </div>
                <p className="text-xs text-gray-500 italic mt-2">+ Sayari/Kharon API costs (varies by usage)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monthly Operating (Growth)</h3>
                <p className="text-sm text-gray-600">Scaled Usage</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">DigitalOcean/AWS</span>
                  <span className="font-medium text-gray-900">$200-500+</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">PostgreSQL (Managed)</span>
                  <span className="font-medium text-gray-900">$100-200</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Pinecone (Vector DB)</span>
                  <span className="font-medium text-gray-900">$50-200</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">OpenAI API</span>
                  <span className="font-medium text-gray-900">$200-800+</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Sayari/Kharon API</span>
                  <span className="font-medium text-gray-900">Contact for pricing</span>
                </div>
                {/* <div className="flex justify-between py-1">
                  <span className="text-gray-600">WorldCheck/Orbis APIs</span>
                  <span className="font-medium text-gray-900">$500-1,000</span>
                </div> */}
                <div className="flex justify-between py-1 border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold text-gray-900">Monthly Recurring (Base)</span>
                  <span className="text-xl font-bold text-purple-600">~$550-1,700+</span>
                </div>
                <p className="text-xs text-gray-500 italic mt-2">+ Sayari/Kharon API costs (scales with usage)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Costs & Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Maintenance & Support</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Bug fixes & updates</span>
                    <span className="font-medium text-gray-900">$20-80/mo</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Security patches</span>
                    <span className="font-medium text-gray-900">$10-40/mo</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Feature enhancements</span>
                    <span className="font-medium text-gray-900">$20-80/mo</span>
                  </div>
                  <div className="flex justify-between p-2 bg-blue-50 rounded border border-blue-200 mt-2">
                    <span className="font-bold text-gray-900">Total Maintenance</span>
                    <span className="font-bold text-blue-600">$50-200/mo</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm">One-Time Costs (Optional)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Domain & branding</span>
                    <span className="font-medium text-gray-900">$50-200</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">SSL certificates (if not included)</span>
                    <span className="font-medium text-gray-900">$0-100/yr</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Legal compliance review</span>
                    <span className="font-medium text-gray-900">$500-2,000</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Marketing materials</span>
                    <span className="font-medium text-gray-900">$200-1,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">3-Phase Growth Strategy (Per Document)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Phase 1: MVP (Foundation)</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Contract AI + Repository</li>
                  <li>• API integrations (Sayari/Kharon)</li>
                  <li>• Alerts & Monitoring</li>
                  <li>• Graph visualization</li>
                </ul>
                <p className="mt-3 font-bold">Initial: $5,900-7,500</p>
                <p className="text-xs">Monthly Base: $165-420</p>
                <p className="text-xs italic">+ API costs (TBD)</p>
                <p className="text-xs mt-2 bg-yellow-400 bg-opacity-30 p-1 rounded">+ $500-2K if building proprietary data</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Phase 2: Expansion (Floors)</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Supply-chain overlays</li>
                  <li>• Role-based UX</li>
                  <li>• ERP/CRM connectors</li>
                  <li>• Advanced analytics</li>
                </ul>
                <p className="mt-3 font-bold">Dev: $6,000-10,000</p>
                <p className="text-xs">Monthly Base: $500-1,500</p>
                <p className="text-xs italic">+ Scaled API costs</p>
                <p className="text-xs mt-2 bg-yellow-400 bg-opacity-30 p-1 rounded">Data enrichment adds $3K-4K</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-bold mb-2">Phase 3: Moat (Roof)</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Proprietary datasets</li>
                  <li>• Predictive AI</li>
                  <li>• Marketplace ecosystem</li>
                  <li>• Enterprise features</li>
                </ul>
                <p className="mt-3 font-bold">Dev: $15,000-25,000</p>
                <p className="text-xs">Monthly Base: $2,000-5,000</p>
                <p className="text-xs italic">+ Enterprise API costs</p>
                <p className="text-xs mt-2 bg-yellow-400 bg-opacity-30 p-1 rounded">Proprietary data: $5K-10K+</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-lg p-5">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2 text-lg">
                <AlertCircle className="w-6 h-6" />
                Proprietary Data Collection Strategy
              </h4>
              <p className="text-sm text-orange-900 mb-3">
                Building your own datasets creates competitive advantage but requires significant investment:
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 mb-1">Phase 1 (MVP)</p>
                  <p className="text-gray-700">Basic data collection + validation: <strong>$200-1,000</strong></p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 mb-1">Phase 2 (Expansion)</p>
                  <p className="text-gray-700">Expanded coverage + enrichment: <strong>$1,000-2,000</strong></p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-gray-900 mb-1">Phase 3 (Moat)</p>
                  <p className="text-gray-700">Comprehensive proprietary dataset: <strong>$3,000-5,000+</strong></p>
                </div>
              </div>
              <p className="text-xs text-orange-800 mt-3 italic">
                💡 Recommendation: Start with third-party APIs in Phase 1, gradually build proprietary data for competitive differentiation
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Cost Optimization Tips
                </h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Use API caching to reduce Sayari/Kharon call frequency</li>
                  <li>• Batch API requests where possible to minimize costs</li>
                  <li>• Start with DigitalOcean for lower infrastructure costs</li>
                  <li>• Negotiate volume-based pricing with API vendors</li>
                  <li>• Monitor OpenAI token usage to optimize prompts</li>
                  <li>• Use reserved instances for predictable workloads</li>
                  <li>• Consider Pinecone Starter plan initially ($50/mo)</li>
                  <li>• <strong>Hybrid Approach:</strong> Start with third-party APIs, gradually build proprietary data for high-value segments</li>
                  <li>• <strong>Data Strategy:</strong> Focus proprietary collection on unique/scarce data where APIs are expensive or limited</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Budget Planning Notes
              </h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• <strong>Sayari/Kharon API pricing varies significantly</strong> - Contact vendors for custom quotes based on usage volume</li>
                <li>• <strong>Proprietary Data Collection:</strong> Building your own datasets (web scraping, data partnerships, manual collection) can add $2K-50K+ depending on scope and quality requirements</li>
                <li>• <strong>Data Licensing Costs:</strong> If sourcing data from third parties, licensing fees may apply on top of collection costs</li>
                <li>• API costs scale with user activity and data requests</li>
                <li>• Add 20-30% buffer for unexpected expenses</li>
                <li>• Review usage monthly to forecast costs accurately</li>
                <li>• Consider annual contracts for API savings (10-20% discount typical)</li>
                <li>• Plan for data storage growth over time</li>
                <li>• <strong>Data Quality:</strong> Higher quality proprietary data requires more investment in validation and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentWorkflow;