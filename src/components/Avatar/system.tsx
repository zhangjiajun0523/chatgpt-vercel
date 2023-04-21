import { FC } from 'react';

const SystemAvatar: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img width={32} height={32} {...props} src="/assistant-avatar.gif" />
);

export default SystemAvatar;
