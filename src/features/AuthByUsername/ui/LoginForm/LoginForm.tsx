import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '@INIT loginForm reducer' });

    return () => {
      store.reducerManager.remove('loginForm');
      dispatch({ type: '@DESTROY loginForm reducer' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default LoginForm;
