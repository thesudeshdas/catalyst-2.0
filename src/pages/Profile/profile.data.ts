import AboutTab from './About/About';
import BlogsTab from './Blogs/Blogs';
import PortfolioTab from './Portfolio/Portfolio';
import ProjectsTab from './Projects/Projects';
import WorkTab from './Work/Work';

export const profileTabsList: {
  name: string;
  label: string;
  panel: ({ userId }: { userId: string }) => JSX.Element;
}[] = [
  {
    name: 'portfolio',
    label: 'Portfolio',
    panel: PortfolioTab
  },
  {
    name: 'projects',
    label: 'Projects',
    panel: ProjectsTab
  },
  {
    name: 'blogs',
    label: 'Blogs',
    panel: BlogsTab
  },
  {
    name: 'work',
    label: 'Work',
    panel: WorkTab
  },
  {
    name: 'about',
    label: 'About',
    panel: AboutTab
  }
];
