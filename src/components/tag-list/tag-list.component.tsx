import { Tag, Typography } from '@/components/ui';
import { ITagListProps } from './tag-list.model';
import cl from './tag-list.module.scss';

export const TagList = ({ className="", tags , title, prefix, border}:ITagListProps) => {
  return (
    <div className={cl.tags+" "+className+" "+(border ? cl.border : "")}>
      {title &&  <Typography.P weight={600}>{title}</Typography.P>}
      <ul className={cl.list}>
        {tags.map((item,index)=>(<li key={index}>
          <Tag children={prefix ? prefix+item.label : item.label} href={item.slug}  variant='fluid-light'/>
        </li>))}
      </ul>
    </div>

  );
};