import {AbsoluteFill} from 'remotion';
import {MainProps} from '../../config';

type CardProps = {
  children: React.ReactNode;
  userStats: MainProps['userStats'];
};

export function Card({children, userStats}: CardProps) {
  console.log('Card received userStats:', userStats ? 'YES' : 'NO', userStats);

  if (!userStats) {
    console.error('Card: userStats is null/undefined, returning null');
    return null;
  }

  return (
    <AbsoluteFill className="bg-transparent p-1">
      {children}
    </AbsoluteFill>
  );
}
