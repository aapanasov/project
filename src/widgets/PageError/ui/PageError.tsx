import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <Button onClick={reloadPage} variant={ButtonVariant.OUTLINED}>{t('Refresh page')}</Button>
    </div>
  );
};
