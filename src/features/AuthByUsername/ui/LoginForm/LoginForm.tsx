import {
  getLoginState,
} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization')} />
      {error && <Text text={t(error)} variant={TextVariant.ERROR} />}
      <Input
        value={username}
        onChange={onUsernameChange}
        placeholder={t('login')}
        autoFocus
      />
      <Input
        value={password}
        onChange={onPasswordChange}
        placeholder={t('password')}
      />

      <Button
        className={cls.loginBtn}
        variant={ButtonVariant.OUTLINED}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Enter')}
      </Button>

    </div>
  );
});
