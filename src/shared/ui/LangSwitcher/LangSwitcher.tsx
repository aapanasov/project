import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className, short } = props;

  const [t, i18n] = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      size={short ? ButtonSize.L : ButtonSize.M}
    >
      {t(short ? 'Lang' : 'Language')}
    </Button>
  );
};
