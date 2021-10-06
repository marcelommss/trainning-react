import { Wrapper } from './styles';

function MenuItem({label, active}) {
  return (
    <Wrapper active={active}>
      <h3>{label}</h3>
    </Wrapper>
  );
}

export default MenuItem;
