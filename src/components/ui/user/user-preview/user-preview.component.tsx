import { IUserPreviewProps } from './user-preview.model';
import cl from './user-preview.module.scss';
import { Typography } from "@/components/ui/typography";
import Image from 'next/image';

export const UserPreview = ({ className="", avatar, name }:IUserPreviewProps) => {
  return (
    <div className={cl.card+" "+className}>
					<Image
						className={cl.avatar}
						loading="lazy"
						decoding="async"
						width={36}
						height={36}
						alt={""}
						src={avatar || ""}
					/>
					<Typography.Span>{name}</Typography.Span>
    </div>
  );
};