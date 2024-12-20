import { MdNavigateNext } from 'react-icons/md';

import colorPalette from '@/styles/tokens/colorPalette';

import Box from '@/components/common/Box';
import Typography from '@/components/common/Typography';
import ProfileImage from '@/components/common/ProfileImage';

import * as style from './FoundationItemStyle.css';

interface FoundationItemProps {
  foundation: {
    id: number;
    introduction: string;
    profileImageUrl?: string;
    name: string;
  };
  onClick?: () => void;
}

export default function FoundationItem({
  foundation,
  onClick,
}: FoundationItemProps) {
  return (
    <Box
      className={style.container}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Box className={style.flexbox}>
        <ProfileImage
          src={foundation.profileImageUrl}
          borderColor={colorPalette.grey[400]}
          size="md"
          style={{ flex: '0 0 auto' }}
        />
        <Box className={style.textbox}>
          <Typography as="h4" weight="medium">
            {foundation.name}
          </Typography>
          <Typography weight="light" className={style.descript}>
            {foundation.introduction}
          </Typography>
        </Box>
      </Box>

      {/* 버튼 */}
      <Box className={style.btn}>
        <MdNavigateNext size={30} color="grey" />
      </Box>
    </Box>
  );
}
