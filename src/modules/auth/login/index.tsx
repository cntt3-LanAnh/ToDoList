import { Component } from './component';
import { useLogic } from './useLogic';

export const Index = () => {
  const { formHandler } = useLogic();

  return <Component formHandler={formHandler} />;
};
