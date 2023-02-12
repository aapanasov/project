import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// TESTING Component
export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={throwError}>
      Throw error
    </Button>
  );
};
