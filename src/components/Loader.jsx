import { Watch } from 'react-loader-spinner';
import styled from 'styled-components';

const Wraper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  width: 200px;
`;

export const Loader = () => {
  return (
    <Wraper>
      <Watch
        height="100%"
        width="100%"
        radius="48"
        color="#3f51b5"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wraper>
  );
};
