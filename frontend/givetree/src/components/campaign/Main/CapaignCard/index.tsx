import ProgressBar from '@/components/campaign/Main/CapaignCard/ProgressBar';
import * as styles from './CampaignCard.css';
import Typography from '@/components/common/Typography';
import Link from 'next/link';
import colorPalette from '@/styles/tokens/colorPalette';

interface CampaignCardProps {
  id: number;
  title: string;
  foundation: string;
  currentFundraisingAmount: number;
  targetFundraisingAmount: number;
  titleImageUrl: string;
  totalCampaign: number;
  currentIndex: number;
}

const CampaignCard = ({
  id,
  title,
  foundation,
  currentFundraisingAmount = 0,
  targetFundraisingAmount = 0,
  titleImageUrl,
  totalCampaign,
  currentIndex,
}: CampaignCardProps) => {
  return (
    <Link
      href={`/campaign/${id}`}
      className={styles.campaignCard}
      style={{
        backgroundImage: `url(${titleImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <Typography as="h2" weight="semiBold" className={styles.campaignTitle}>
          {title}
        </Typography>
        <div className={styles.cardIndex}>
          <Typography as="h5" weight="medium">
            {currentIndex + 1} / {totalCampaign}
          </Typography>
        </div>
        <Typography
          as="h3"
          weight="semiBold"
          className={styles.campaignSubtitle}
        >
          {foundation}
        </Typography>
      </div>

      <div className={styles.progressContainer}>
        <ProgressBar
          progress={
            (currentFundraisingAmount / targetFundraisingAmount) * 100 === 0
              ? '0'
              : (currentFundraisingAmount / targetFundraisingAmount) * 100 > 1
              ? Math.floor(
                  (currentFundraisingAmount / targetFundraisingAmount) * 100
                ).toString()
              : (
                  (currentFundraisingAmount / targetFundraisingAmount) *
                  100
                ).toFixed(2)
          }
        />
        <div className={styles.amountContainer}>
          <Typography as="h5" weight="semiBold" color={colorPalette.text[900]}>
            {currentFundraisingAmount?.toLocaleString()}원
          </Typography>
          <Typography as="h5" weight="semiBold" color={colorPalette.text[900]}>
            {targetFundraisingAmount?.toLocaleString()}원 목표
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
