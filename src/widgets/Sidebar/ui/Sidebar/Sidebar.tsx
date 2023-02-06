import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props

  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className]) }>
      <Button onClick={ onToggle }>Toggle</Button>
      <div className={ cls.switchers }>
        <ThemeSwitcher />
        {/* lang switch */ }
      </div>
    </div>
  );
};
