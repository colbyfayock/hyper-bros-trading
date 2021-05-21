import { useEffect, useState } from 'react';

export function useSnipcart() {
  const [state, setState] = useState({});

  useEffect(() => {
    const unsubscribe = window.Snipcart.store.subscribe(() => refreshState());
    return () => unsubscribe();
  }, []);

  /**
   * getState
   */

  function getState() {
    return window.Snipcart.store.getState();
  }

  /**
   * refreshState
   */

  function refreshState() {
    const state = getState();
    setState(state);
  }

  return {
    refreshState,
    getState,
    ...state,
  }
}