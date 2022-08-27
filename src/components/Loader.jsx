import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#919191"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName="watch"
      visible={true}
    />
  );
};
