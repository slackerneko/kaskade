import { type JSX } from 'react';

function errorForFn(name: string) {
  return new Error(`Unexpected 'kaskade.${name}' call at runtime. Styles must be compiled by 'kaskade/rolldown-plugin'.`);
}

type Component = (props: any) => JSX.Element;

export default {
  create: (component: Component, callback: (props: any) => any ) => {},
  apply: () => '',
}
