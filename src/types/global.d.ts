export {};

declare module 'react' {
  interface FunctionComponent {
    layout?: string;
    type?: {
      layout?: string;
    };
  }
}

declare global {
  interface ObjectConstructor {
    keys<T>(obj: T): Array<keyof T>;
  }
}
