'use client';

import { FormEvent, startTransition, useActionState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import useDialog from '@/hooks/useDialog';

import signinFoundation from '@/actions/auth/signinFoundation';

import Box from '@/components/common/Box';
import Flex from '@/components/common/Flex';
import FormButton from '@/components/common/FormButton';
import TextField from '@/components/common/TextField';

const FoundationSigninForm = () => {
  const router = useRouter();

  const { alert } = useDialog();

  const [state, action, isPending] = useActionState(signinFoundation, {});

  useEffect(() => {
    if (state.success) {
      router.replace('/');
      return;
    }

    if (state.message) {
      alert(state.message);
      return;
    }
  }, [router, alert, state]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    startTransition(() => action(new FormData(e.target as HTMLFormElement)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="column" gap="0.75rem">
        <TextField
          variant="outlined"
          name="username"
          placeholder="이메일 주소"
        />
        <TextField
          variant="outlined"
          type="password"
          name="password"
          placeholder="비밀번호"
        />
        <Box paddingTop="1rem">
          <FormButton
            variant="contained"
            size="lg"
            pending={isPending}
            fullWidth
          >
            로그인
          </FormButton>
        </Box>
      </Flex>
    </form>
  );
};

export default FoundationSigninForm;
