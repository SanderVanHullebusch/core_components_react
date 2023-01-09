import { Badge } from '@acpaas-ui/react-components';

export function BadgeExamples() {
  return (
    <>
      <h2>Badges</h2>
      <Badge>1</Badge>
      <Badge theme="primary" type="transparent">
        2
      </Badge>
      <Badge theme="primary" type="outlined">
        3
      </Badge>
      <Badge ariaLabel="Four" theme="neutral" type="outlined">
        4
      </Badge>
    </>
  );
}

export default BadgeExamples;
