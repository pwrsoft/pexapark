export interface AppEnvironment {
  apiUrl: string;
  env: string;
}

export const environment: AppEnvironment = {
  apiUrl: '',
  env: 'QA'
};

export function getEnvironment() {
  return environment;
}

export default environment;
