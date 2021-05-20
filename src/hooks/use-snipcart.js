import { useEffect, useState, useRef } from 'react';

export function useSnipcart() {
  const snipcartRef = useRef();
  const [state, setState] = useState({});

  useEffect(() => {
    snipcartRef.current = window.Snipcart;

    refreshState();

    const unsubscribe = snipcartRef.current.store.subscribe(() => refreshState());

    return () => unsubscribe();
  }, []);

  /**
   * refreshState
   */

  function refreshState() {
    const state = getState();
    setState(state);
  }

  /**
   * getState
   */

  function getState() {
    return snipcartRef.current.store.getState();
  }

  return {
    ref: snipcartRef,
    ...state
  }
}