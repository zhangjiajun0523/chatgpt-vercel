import { FC } from 'react';

const SystemAvatar: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img width={32} height={32} {...props} src="https://vip.chargpt.cn/_astro/assistant-avatar.55eb2217.gif" />
);

export default SystemAvatar;
