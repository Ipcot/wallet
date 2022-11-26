import { createSelectorHook, useDispatch, useStore } from 'react-redux';

export const useRedux = () => {
  const useSelector = createSelectorHook();
  const dispatch = useDispatch();
  const store = useStore();

  return [useSelector, dispatch, store];
};
