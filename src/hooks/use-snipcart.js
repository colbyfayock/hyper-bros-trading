import { useEffect, useState, useRef } from 'react';

export function useSnipcart() {
  const subscriptionRef = useRef();
  const [state, setState] = useState({});

  useEffect(() => {
    function pollToSubscribe() {
      if ( window.Snipcart ) {
        subscribe();
        return;
      }
      setTimeout(() => pollToSubscribe(), 100)
    }
    pollToSubscribe();
    return () => unsubscribe();
  }, []);

  /**
   * subscribe
   */

  function subscribe() {
    subscriptionRef.current = window.Snipcart.store.subscribe(() => refreshState());
  }

  /**
   * unsubscribe
   */

  function unsubscribe() {
    subscriptionRef.current();
  }

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