import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onModalToggle = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const lorem = `Lorem ipsum dolor,
  sit amet consectetur adipisicing elit.
  Saepe consequuntur harum nostrum labore
  rerum magni architecto. Nisi iusto repudiandae
  totam enim laboriosam. Quod nisi necessitatibus obcaecati,
   dignissimos odit delectus quaerat?`;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onModalToggle}
      >
        {t('Enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onModalToggle}>{lorem}</Modal>
    </div>
  );
}
