import { Wrapper, Button} from './styles';

function MenuItem({item, onClick}) {
  return (
    <Wrapper active={item.active}>
      <Button className="cirle" onClick={onClick}>
        {item.icon}
      </Button>
      {/* <h3>{item.name}</h3> */}
    </Wrapper>
  );
}

export default MenuItem;
