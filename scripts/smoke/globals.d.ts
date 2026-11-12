// Minimal Node globals so tsc can run without installing @types/node.
declare var process: {
  env: Record<string, string | undefined>;
  exitCode?: number;
};

declare var console: {
  log(...args: unknown[]): void;
  error(...args: unknown[]): void;
};
