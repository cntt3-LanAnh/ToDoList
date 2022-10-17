/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { useMemo } from 'react';

interface Props {
  configs: DefaultSeoProps;
}

export const SEO = ({ configs }: Props) => {
  const { asPath } = useRouter();

  const defaultSeo = useMemo<DefaultSeoProps>(() => {
    const newDefaultSeo = {} as any;
    Object.keys(configs).forEach((configKey) => {
      const key = configKey;
      newDefaultSeo[key] = configs[key];
    });

    return newDefaultSeo;
  }, [configs, asPath]);

  return <DefaultSeo {...defaultSeo} />;
};
