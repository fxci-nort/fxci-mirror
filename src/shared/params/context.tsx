import React, { useState, useEffect, ReactNode } from 'react';
import getParams from './getParams';
import saveParams from './saveParams';
import TRACKED_PARAMS from '@/shared/config/params';
import { ParamsContext } from './paramsContext';
import { InitSentry } from '@/shared/config/sentry';
interface ParamsProviderProps {
  children: ReactNode;
}

export const ParamsProvider: React.FC<ParamsProviderProps> = ({ children }) => {
  const [isSentryInitialized, setIsSentryInitialized] = useState(false);
  const [params, setParams] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    const trackedValues: Record<string, string | undefined> = {};

    TRACKED_PARAMS.forEach(param => {
      const value = getParams(param.name);
      trackedValues[param.name] = value;

      if (value && param.saveToStorage) {
        saveParams(param.name, value);
      }
    });

    setParams(trackedValues);
    if (!isSentryInitialized) {
      InitSentry({ subid: trackedValues.subid || 'unknown' });
      setIsSentryInitialized(true);
    }
  }, []);

  // Function to add params to a URL for redirects
  const addParamsToUrl = (url: string): string => {
    const urlObj = new URL(url.startsWith('http') ? url : `${window.location.origin}${url}`);
    const searchParams = new URLSearchParams(urlObj.search);

    // Add tracked params to the URL if they exist
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value);
      }
    });

    if (params.subid) {
      searchParams.set('clickid', params.subid);
    }

    searchParams.set('si', 'fb');

    urlObj.search = searchParams.toString();
    return urlObj.toString();
  };

  return (
    <ParamsContext.Provider value={{ params, addParamsToUrl }}>{children}</ParamsContext.Provider>
  );
};
