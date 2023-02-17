import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => setCollapsed((prev) => !prev);
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
      }
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <div className={cls.item}>
          <MainIcon className={cls.icon} />
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/"
            className={cls.mainLink}
          >
            {t('Main')}
          </AppLink>
        </div>

        <div className={cls.item}>
          <AboutIcon className={cls.icon} />
          <AppLink
            to="/about"
            theme={AppLinkTheme.SECONDARY}
          >
            {t('About')}
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
