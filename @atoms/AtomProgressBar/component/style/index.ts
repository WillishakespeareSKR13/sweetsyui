import styled from '@emotion/styled';

interface Props {
  color?: string;
  row?: boolean;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;

  .bar {
    margin-left: ${({ row }) => (row ? '20px' : '0px')}!important;
    margin-right: ${({ row }) => (row ? '20px' : '0px')}!important;
  }

  .progress {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
  }

  .inner-label {
    white-space: nowrap;
    font-weight: 600;
  }
`;

export const LabelWrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
  }
`;
