export const usePrompt = (
  when: boolean,
  message: string,
) => {
  const { history } = useRouter();

  const self = useRef(null);

  const onWindowOrTabClose = event => {
    if (!when) {
      return;
    }

    // eslint-disable-next-line
    if (typeof event == 'undefined') {
      event = window.event;
    }

    if (event) {
      event.returnValue = message;
    }

    return message;
  };

  useEffect(() => {
    if (when) {
      self.current = history.block(message);
    } else {
      self.current = null;
    }

    window.addEventListener(
      'beforeunload',
      onWindowOrTabClose
    );

    return () => {
      if (self.current) {
        self.current();
        self.current = null;
      }

      window.removeEventListener(
        'beforeunload',
        onWindowOrTabClose
      );
    };
  }, [message, when]);
};
