import { useEffect } from 'react';

interface Event {
  event: keyof WindowEventMap;
  callback: (event: any) => any;
}

const useEvents = (events: Event[]) => {
  useEffect(() => {
    events.forEach(({ event, callback }) => {
      window.addEventListener(event, callback);
    });

    return () =>
      events.forEach(({ event, callback }) => {
        window.removeEventListener(event, callback);
      });
  }, [events]);
};

export default useEvents;
