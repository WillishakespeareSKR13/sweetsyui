import { QueryTypeNode } from '@types';
import { FC } from 'react';

const childrenLayout: FC<QueryTypeNode> = (props) => <>{props.children}</>;

export const AllLayouts = {
  login: childrenLayout,
  admin: childrenLayout,
  default: childrenLayout,
  profile: childrenLayout,
  dashboard: childrenLayout,
  customize: childrenLayout,
};

export type LayoutType = {
  Layout?: keyof typeof AllLayouts;
  role?: string | string[];
};

const LayoutContext: FC<LayoutType> = (props) => {
  const { Layout, children, role } = props;
  const GetLayout = AllLayouts[Layout || 'default'];
  return (
    <GetLayout role={role} query={undefined}>
      {children}
    </GetLayout>
  );
};

export default LayoutContext;
