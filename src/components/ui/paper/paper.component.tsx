import { IPaperProps } from './paper.model';
import cl from './paper.module.scss';

export const Paper = ({ className="", variant = "primary", pd, children }:IPaperProps) => {
  return (
    <div className={`${cl.paper} ${cl[variant]} ${pd ? cl['pd'+pd] : ""} ${className}`}>
      {children}
    </div>
  );
};