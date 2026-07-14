"use client";

import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';
// import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const clientResult = clientSideFunction();
  // const serverResult = serverSideFunction();

  return (
    <>
      <h2 style={{color: theme.colors.primary}}>Client router page</h2>
      <p>{clientResult}</p>
    </>
  );
}