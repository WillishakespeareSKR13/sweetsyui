import { Wrapper, LabelWrapper } from './style';

export interface ProgressBarProps {
  backgroundColor?: string;
  progress?: string;
  progressColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  rightLabel?: string;
  leftLabel?: string;
  innerLabel?: string;
  className?: string;
  row?: boolean;
}

export const ProgressBar = ({
  backgroundColor = 'gray',
  progressColor,
  borderRadius,
  rightLabel,
  innerLabel,
  leftLabel,
  className,
  progress,
  height,
  width,
  row,
}: ProgressBarProps) => {
  const containerStyles = {
    height: height || 5,
    width: width || '100%',
    backgroundColor,
    borderRadius,
    margin: 'auto',
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: progressColor || 'red',
    borderRadius: 'inherit',
    textAlign: 'right' as const,
  };

  return (
    <Wrapper className={`${className} progress-bar`} row={row}>
      {!row && (
        <LabelWrapper className="label-wrapper">
          <span className="left-label">{leftLabel}</span>
          {rightLabel && <span className="right-label">{rightLabel}</span>}
        </LabelWrapper>
      )}
      {row && leftLabel && <span className="left-label">{leftLabel}</span>}
      <div style={containerStyles} className="bar">
        <div style={fillerStyles} className="progress">
          {innerLabel && <span className="inner-label">{innerLabel}</span>}
        </div>
      </div>
      {row && rightLabel && <span className="right-label">{rightLabel}</span>}
    </Wrapper>
  );
};
