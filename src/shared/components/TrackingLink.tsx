import React, { AnchorHTMLAttributes } from 'react';
import { useParams } from '@/shared/params';

interface TrackingLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
}

/**
 * A link component that automatically adds tracked parameters to the destination URL
 */
const TrackingLink: React.FC<TrackingLinkProps> = ({ to, href, children, onClick, ...rest }) => {
  const { addParamsToUrl } = useParams();
  const url = to || href || '';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={url ? addParamsToUrl(url) : undefined} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default TrackingLink;
