import { createSelectorHook, useDispatch, useStore } from 'react-redux';

export const useRedux = () => {
  const selector = createSelectorHook();
  const dispatch = useDispatch();
  const store = useStore();

  return [selector, dispatch, store];
};
