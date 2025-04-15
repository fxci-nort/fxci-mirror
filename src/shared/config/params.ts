export interface ParamConfig {
  name: string;
  saveToStorage?: boolean;
}

const TRACKED_PARAMS: ParamConfig[] = [
  { name: 'subid', saveToStorage: true },
  { name: 'account_name', saveToStorage: true },
  { name: 'ref', saveToStorage: true },
  { name: 'fbclid', saveToStorage: true },
];

export default TRACKED_PARAMS;
