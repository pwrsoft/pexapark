export interface AppEnvironment {
  apiUrl: string;
  env: string;
}

export const environment: AppEnvironment = {
  apiUrl: 'http://localhost:3000',
  env: 'QA'
};

export function getEnvironment() {
  return environment;
}

export default environment;
